import React, { useEffect, useState } from 'react';
import FormSearch from '../components/FormSearch';
import CurrencesList from '../components/CurrencesList';
import Loader from '../components/UI/Loader/Loader';
import CurrencesService from '../AP/CurrencyService';
import { dataProcessing } from '../utils/fileCheck';

const Currences = () => {

    const [currences, setCurrency] = useState([]);
    const [saerch, setSaerch] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [listLoading, setListLoading] = useState(false);
    const getSaerchValue = (value) =>{
        setSaerch(value);
    }

    const removeCurrences = (currency) =>{
        const nawCurrences = currency.filter((item) => {
            item.USD.NAME !== currency.USD.NAME
        });
        setCurrency(nawCurrences);
    }

    const sortCurrences = (sort) =>{
    setSelectedSort(sort);
    }

    async function sendList() {
        setListLoading(true);
        const currences = await CurrencesService.getList();
        console.log(await CurrencesService.getList());
        const result = dataProcessing(currences);
        setCurrency(result);
        setListLoading(false);
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

    useEffect(() => {sendList()}, []);
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