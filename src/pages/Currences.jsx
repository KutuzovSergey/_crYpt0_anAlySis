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
    const [allList, setAllList] =useState([]);

    const getSaerchValue = (value) =>{
        setSaerch(value);
    }

    const removeCurrences = (currency) =>{
        const result = []
        for (let i = 0; i < currences.length; i++) {
            const element = currences[i];
            if(element.USD.NAME !== currency.NAME){
                result.push(element);
            }
        }
        setCurrency(result);
        // setCurrency(currences.filter((item) => {
        //     console.log(item.USD.NAME !== currency.NAME);
        //     item.USD.NAME !== currency.NAME
        // }));
    }

    const sortCurrences = (sort) =>{
        setSelectedSort(sort);
    }

    async function getAllList(){
        const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
        const url = 'https://min-api.cryptocompare.com/data/blockchain/list';
        const get = 'GET';
        const result = []

        const currences = await CurrencesService.getData(get, url, api_key);

        setAllList(currObject.keys(currences.Data));
    } 

    async function  getListOnPage() {
        const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
        const parameters = '?fsyms=BTC,ETH,AAC,ADB,AIDOC,0XBTC&tsyms=USD,EUR';
        const url = 'https://min-api.cryptocompare.com/data/pricemultifull';
        const get = 'GET';
        
        setListLoading(true);
        const currences = await CurrencesService.getData(get, url, parameters, api_key);
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
    useEffect(() => {getAllList()}, [])
    useEffect(() => {getListOnPage()}, []);
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