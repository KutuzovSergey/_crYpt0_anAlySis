import React, { useEffect, useState } from 'react';
import FormSearch from '../components/FormSearch';
import CurrencesList from '../components/CurrencesList';
import Loader from '../components/UI/Loader/Loader';
import { getAllList, getListOnPage } from '../AP/getCoins';

const Currences = () => {

    const [currences, setCurrences] = useState([]);
    const [saerch, setSaerch] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [listLoading, setListLoading] = useState(false);
    const [allList, setAllList] = useState([]);
    const [displayedCoins, setDisplayedCoins] = useState([]);

    const getSaerchValue = (value) =>{
        setSaerch(value);
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

        const sortingNumbers = (a, b) =>{
            if (a > b) {
                return -1
            } else {
                return 1
            }
        }

        setSelectedSort(sort);
        
        if (sort === 'NAME') {           
            copyCurrences.sort((a, b) =>  a[sort].localeCompare(b[sort]));
        } else {
            copyCurrences.sort((a, b) =>  sortingNumbers(a[sort], b[sort]));
        }
        setCurrences(copyCurrences);
    }

    const getDisplayedCoins = async (coins, index) =>{
        const result = []
        coins.forEach( item => {
            if (coins.indexOf(item) <= index) {
                result.push(item);
            }
        });

        setDisplayedCoins(result);
    }

    const getListCoinsOnPage = async (coinList) =>{
        setListLoading(true);
        setCurrences( await getListOnPage(coinList));
        setListLoading(false);
    }

    const getListCoins = async () => {
        setAllList( await getAllList());
        getDisplayedCoins(allList, 9);
    }
   
    useEffect(() => {getListCoins()}, []);
    useEffect(() => {getListCoinsOnPage(displayedCoins)}, [displayedCoins]);

    return (
        <div className='content'>
            <FormSearch 
                saerch={saerch} 
                sort={sort => sortCurrences(sort)}
                sortValue={selectedSort}
                getSaerchValue={getSaerchValue} />
            <hr className='content__line' />
            {listLoading 
                ?
                <Loader/>
                :
                <CurrencesList 
                currences={currences}
                remove={removeCurrences}/>
            }
        </div>
    )
}

export default Currences;