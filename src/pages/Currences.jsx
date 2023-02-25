import React, { useEffect, useState } from 'react';
import FormSearch from '../components/FormSearch';
import CurrencesList from '../components/CurrencesList';
import Loader from '../components/UI/Loader/Loader';
import CurrencesService from '../AP/CurrencyService';
import { dataProcessing } from '../utils/fileCheck';

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

            // setCurrences([...currences].sort((a, b) => {
            //     a[sort].localeCompare(b[sort]);
            // }));
        } else {

            copyCurrences.sort((a, b) =>  sortingNumbers(a[sort], b[sort]));

            // setCurrences([...currences].sort((a, b) => {
            //     sortingNumbers(a[sort], b[sort]);
            // }));
        }
        setCurrences(copyCurrences);
    }

    const getDisplayedCoins = (coins, index) =>{
        const result = []
        coins.forEach( item => {
            if (coins.indexOf(item) <= index) {
                result.push(item);
            }
        });

        setDisplayedCoins(result);
    }

    async function  getListOnPage(coins) {
        if(!coins.length){
            coins = ['RMESH', 'ADA', 'SAL', 'ATMI', 'BAAS'];
        }

        const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
        const parameters = `?fsyms=${coins}&tsyms=USD`;
        const url = 'https://min-api.cryptocompare.com/data/pricemultifull';
        const get = 'GET';
         
        setListLoading(true);
        const result = await CurrencesService.getData(get, url, parameters, api_key);

        setCurrences(dataProcessing(result));
        setListLoading(false);
    } 

    async function getAllList(col){
        const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
        const url = 'https://min-api.cryptocompare.com/data/blockchain/list';
        const get = 'GET';

        const result = await CurrencesService.getData(get, url, api_key);

        setAllList(Object.keys(result.Data));

        getDisplayedCoins(allList, 9);
    }

    // const getList = () => {
    // const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
    // const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,AAC,ADB,AIDOC,0XBTC&tsyms=USD,EUR';

    // const sendList = (method, url, param) =>{
    //     return new Promise((resolve, reject) => {

    //     const xhr = new XMLHttpRequest();
    
    //     xhr.open(method, url+param);
    
    //     xhr.responseType = 'json';
    
    //     xhr.onload = () => {
    //         if(xhr.status >= 400){
    //         reject(xhr.response);
    //         } else {
    //         resolve(xhr.response);
    //         }
    //     }
    
    //     xhr.onerror = () => {
    //         reject(xhr.response);
    //     }
    //     xhr.send();
    //     })
    // }

    // sendList('GET', url, api_key)
    //     .then(data => dataProcessing(data))
    //     .catch(err => console.log(err))
    // }
    useEffect(() => {getAllList()}, []);
    useEffect(() => {getListOnPage(displayedCoins)}, [displayedCoins]);

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