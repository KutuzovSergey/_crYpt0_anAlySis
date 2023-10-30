import React, { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import MyModal from '../components/UI/MyModal/MyModal';
import Pagination from '../components/UI/Pagination/Pagination';
import LoaderCurrences from '../components/UI/LoaderCurrences/LoaderCurrences';
import FormSearch from '../components/FormSearch';
import CurrencesList from '../components/CurrencesList';
import { getAllList, getListOnPage } from '../AP/getCoins';
import { sortArray } from '../utils/sorting';
import { calculateTotal } from '../utils/totalCount';
import { useDispatch, useSelector } from 'react-redux';
import { allCoinListConst } from '../constants/constants';

import '../styles/Currences.scss';

const Currences = () => {

    const dispatch = useDispatch();

    const allCoinList = useSelector(state => state.allCoinList.coinsList);

    const [modalInfo, setModalInfo] = useState(false);
    const [modalInfoText, setModalInfoText] = useState('')
    const [selectedSort, setSelectedSort] = useState('');
    const [currences, setCurrences] = useState([]);
    const [displayedCoins, setDisplayedCoins] = useState([]);
    const [totalCount, setTotalCount] = useState('');

    const [foundCoin, setFoundCoin] = useState([]);

    const [fetchCoin, isLoadingCoin] = useFetching(async (params) => {
        return await getListOnPage(params)
    });

    const openModalInfo = (text) =>{
        setModalInfoText(text);
        setModalInfo(true);
    }
    
    const getTotalCount = () => {
        setTotalCount(calculateTotal(allCoinList, 9));
    }

    // удалить монету 
    const removeCurrences = (currency) =>{
        setCurrences(currences.filter((item) => item.NAME !== currency.NAME));
    }

    // сортировка
    const sortCurrences = (sort) =>{
        const copyCurrences = currences.slice();
       
        setSelectedSort(sort);
        sortArray(sort, 'NAME', copyCurrences);
        setCurrences(copyCurrences);
    }

    const getDisplayedCoins = async (coins, min, max) =>{
        const result = [];
        coins.forEach( item => {
            if (coins.indexOf(item) >= min && coins.indexOf(item) <= max) {
                result.push(item);
            }
        });

        setDisplayedCoins(result);
    }

    const getAllCoins = async () => {
        dispatch({type:allCoinListConst.GET_COINS_LIST, payload: await getAllList()});
    }

    const getListCoins = (indexMin, indexMax) =>{
        getDisplayedCoins(allCoinList, indexMin, indexMax);
    }

    const fetchListOnPage = async (coinList) =>{
        setCurrences( await fetchCoin(coinList));
    }
   
    useEffect(() => {getAllCoins()}, []);
    useEffect(() => {getListCoins(1, 10)}, [allCoinList]);
    useEffect(() => {fetchListOnPage(displayedCoins)}, [displayedCoins]);
    useEffect(() => {getTotalCount()}, [allCoinList]);
    
    if (isLoadingCoin){
        return <LoaderCurrences/>
    }
    return (
        <div className='content'>
            <FormSearch 
                sortValue={selectedSort}
                sort={sort => sortCurrences(sort)}
                foundCoin={foundCoin} 
                openModalInfo={openModalInfo}
                fetchListOnPage={fetchListOnPage}
                />
            <hr className='content__line' />
            <CurrencesList 
                currences={currences}
                textInfo={'Монеты не найдены'}
                remove={removeCurrences}/>
            <Pagination count={totalCount} getListCoins={getListCoins} />
            <MyModal active={modalInfo} setActive={setModalInfo}>
                <div className='content__modal__info'>
                    <span className='content__modal__info__text'>{modalInfoText}</span>
                </div>
            </MyModal>
            
        </div>
    )
}

export default Currences;