import React, { useEffect, useMemo, useState } from 'react';
import '../styles/Currences.scss';
import FormSearch from '../components/FormSearch';
import CurrencesList from '../components/CurrencesList';
import { getAllList, getListOnPage } from '../AP/getCoins';
import { sortArray } from '../utils/sorting';
import { useFetching } from '../hooks/useFetching';
import Pagination from '../components/UI/Pagination/Pagination';

const Currences = () => {

    const [currences, setCurrences] = useState([]);

    const [saerch, setSaerch] = useState('');
    const [infoSearchSowe, setInfoSearchSowe] = useState(false);

    const [selectedSort, setSelectedSort] = useState('');
    const [allList, setAllList] = useState([]);
    const [displayedCoins, setDisplayedCoins] = useState([]);
    const [infoSearch, setInfoSearch] = useState([
        {text:'Введите короткон имя искомой криптовалюты или несколько через запятую', id: 1}
    ]);
    const [visible, setVisible] = useState(false);
    const [totalCount, setTotalCount] = useState('');

    const [fetchCoin, isLoadingCoin] = useFetching(async (params) => {
        await getListOnPage(params)
    });

    const getTotalCount = () => {
        
        if (allList.length > 9) {
            let result = Math.ceil((allList.length + 1) / 9);
            setTotalCount(result);
        }
    }

    const soweSearchInfo = () => {
        setInfoSearchSowe(true);
    }
    
    const hideSearchInfo = () =>{
        setInfoSearchSowe(false);
            if(saerch === '') {
            setInfoSearch([
                {text:'Введите короткон имя искомой криптовалюты или несколько через запятую', id: 1}
            ]);
        }
    }

    const getSaerchValue = (value) =>{
        setSaerch(value);
        
        const searchCoins = allList.filter(item => item.toLowerCase().includes(saerch.toLowerCase()));

        if (searchCoins.length) {
            const result = [];
            let i = 1;
            searchCoins.forEach(item => result.push({text: item, id: ++i}));
            setInfoSearch(result);
            setVisible(true);
        } else {
            setInfoSearch([{text: 'монеты не найдены', id: 1}]);
            setVisible(false);
        }
    }

    const sendSearchQuery = (e) =>{
        e.preventDefault();
        const result = saerch.split(',');
       
        fetchListOnPage(result);
    }

    const transferInput = (coinName) => {
        
        if (coinName === 'Введите короткон имя искомой криптовалюты или несколько через запятую' 
        || coinName === 'монеты не найдены') {
            return
        }

        coinName = coinName + ', ';
        setSaerch(coinName);
    }
    
    const removeCurrences = (currency) =>{
        const result = []
        for (let i = 0; i < currences.length; i++) {
            const element = currences[i];
            if(element.NAME !== currency.NAME){
                result.push(element);
            }
        }
        setCurrences(result);
        // setCurrences(currences.filter((item) => {
        //     console.log(item.NAME !== currency.NAME);
        //     item.NAME !== currency.NAME
        // }));
    }

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

    const getListCoins = async (indexMin, indexMax) => {
        setAllList( await getAllList());
        getDisplayedCoins(allList, indexMin, indexMax);
    }

    const fetchListOnPage = async (coinList) =>{
        setCurrences( await fetchCoin(coinList));
    }
   
    useEffect(() => {getListCoins(1, 9)}, []);
    useEffect(() => {fetchListOnPage(displayedCoins)}, [displayedCoins]);
    useEffect(() => {getTotalCount()}, [allList]);
    return (
        <div className='content'>
            <FormSearch 
                sortValue={selectedSort}
                sort={sort => sortCurrences(sort)}

                saerch={saerch} 
                infoSearchSowe={infoSearchSowe}
                sendSearchQuery={sendSearchQuery}
                soweSearchInfo={soweSearchInfo}
                hideSearchInfo={hideSearchInfo}
                getSaerchValue={getSaerchValue}

                infoSearchText={infoSearch} 
                visible={visible}
                transferInput={transferInput}
                />
            <hr className='content__line' />
            <CurrencesList 
                listLoading={isLoadingCoin}
                currences={currences}
                remove={removeCurrences}/>
            <Pagination count={totalCount} getListCoins={getListCoins} />
        </div>
    )
}

export default Currences;