import React, { useEffect, useState } from 'react';
import FormSearch from '../components/FormSearch';
import CurrencesList from '../components/CurrencesList';
import { getAllList, getListOnPage } from '../AP/getCoins';
import { sortArray } from '../utils/sorting';
import { useFetching } from '../hooks/useFetching';
import Pagination from '../components/UI/Pagination/Pagination';

import '../styles/Currences.scss';
import { calculateTotal } from '../utils/totalCount';

const Currences = () => {

    const [currences, setCurrences] = useState([]);

    const [search, setSaerch] = useState('');
    const [infoSearchShowe, setInfoSearchShowe] = useState(false);

    const [selectedSort, setSelectedSort] = useState('');
    const [allList, setAllList] = useState([]);
    const [displayedCoins, setDisplayedCoins] = useState([]);
    const [infoSearch, setInfoSearch] = useState('Введите короткон имя искомой криптовалюты или несколько через запятую');

    const [infoListInput, setInfoListInput] = useState([]);

    const [visible, setVisible] = useState(false);
    const [totalCount, setTotalCount] = useState('');

    const [foundCoin, setFoundCoin] = useState([]);

    const [fetchCoin, isLoadingCoin] = useFetching(async (params) => {
        return await getListOnPage(params)
    });

    const getTotalCount = () => {
        setTotalCount(calculateTotal(allList, 9));
    }

    const soweSearchInfo = () => {
        setInfoSearchShowe(true);
    }
    
    const hideSearchInfo = () =>{
        setInfoSearchShowe(false);
            if(search === '') {
            setInfoSearch('Введите короткон имя искомой криптовалюты или несколько через запятую');
        }
    }

    const getSaerchValue = (value) =>{
        setSaerch(value);
    }


    const searchCoins = () => {
        if (search === '') {
            setInfoSearch('Введите короткон имя искомой криптовалюты или несколько через запятую');
            setVisible(false);
        } else {
            let searchItem = allList.slice();

            searchItem = searchItem.filter(item => item.toLowerCase().includes(search.toLowerCase())).sort();

            if (searchItem.length) {
                const result = [];
                let i = 1;
                searchItem.forEach(item => result.push({text: item, id: ++i}));
                setInfoListInput(result);
                setVisible(true);
            } else if (!searchItem.length){
                setInfoSearch('монеты не найдены');
                setVisible(false);
            }
        }

    }

    const transferInput = (coinName) => {
        const result = [];
        result.push(coinName);
        
        setFoundCoin( (coins) => coins.concat(result));
    }

    const deleteFoundCoin = (coin) =>{
        setFoundCoin(foundCoin.filter(item => item !== coin));s
    }

    const sendSearchQuery = (e) =>{
        e.preventDefault();
        const result = search.split(',');
       
        fetchListOnPage(result);
        setInfoSearchShowe(false);
    }
    
    const removeCurrences = (currency) =>{
        setCurrences(currences.filter((item) => item.NAME !== currency.NAME));
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

    const getAllCoins = async () => {
        setAllList( await getAllList());
    }

    const getListCoins = (indexMin, indexMax) =>{
        getDisplayedCoins(allList, indexMin, indexMax);
    }

    const fetchListOnPage = async (coinList) =>{
        setCurrences( await fetchCoin(coinList));
    }
   
    useEffect(() => {getAllCoins()}, []);
    useEffect(() => {getListCoins(1, 10)}, [allList]);
    useEffect(() => {fetchListOnPage(displayedCoins)}, [displayedCoins]);
    useEffect(() => {getTotalCount()}, [allList]);
    useEffect(() => {searchCoins()}, [search]);

    return (
        <div className='content'>
            <FormSearch 
                sortValue={selectedSort}
                sort={sort => sortCurrences(sort)}

                search={search} 
                foundCoin={foundCoin} 
                infoSearchShowe={infoSearchShowe}
                infoListInput={infoListInput}
                sendSearchQuery={sendSearchQuery}
                soweSearchInfo={soweSearchInfo}
                hideSearchInfo={hideSearchInfo}
                getSaerchValue={getSaerchValue}
                deleteFoundCoin={deleteFoundCoin}

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
            {infoSearchShowe ? 
                <div className='content__info__search__hide'
                    onClick={hideSearchInfo}></div>
                :
                ''
            }
            
        </div>
    )
}

export default Currences;