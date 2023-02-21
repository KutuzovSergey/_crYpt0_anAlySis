import React, { useEffect, useState } from 'react';
import FormSearch from '../components/FormSearch';
import CurrencesList from '../components/CurrencesList';
import Loader from '../components/UI/Loader/Loader';

const Currences = () => {

    const [currences, setCurrency] = useState([]);
    const [saerch, setSaerch] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    const getSaerchValue = (value) =>{
        setSaerch(value);
    }

    const removeCurrences = (currency) =>{
        const nawCurrences = {}
        for(let key in currences){
        if (key !== currency) {
            nawCurrences[key] = currences[key];
        }
        }
        setCurrency(nawCurrences);
    }

    const sortCurrences = (sort) =>{
    setSelectedSort(sort);
    }

    const getList = () => {
    const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
    const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,AAC,ADB,AIDOC,0XBTC&tsyms=USD,EUR';

    const dataProcessing = (obj) => {
        const array = [];
        Object.keys(obj.DISPLAY).forEach((key) => {
        console.log(obj.DISPLAY[key]);
        array.push(obj.DISPLAY[key]);
        });
        setCurrency(array);
    }

    const sendList = (method, url, param) =>{
        return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
    
        xhr.open(method, url+param);
    
        xhr.responseType = 'json';
    
        xhr.onload = () => {
            if(xhr.status >= 400){
            reject(xhr.response);
            } else {
            // array.push(xhr.response.Data);
            resolve(xhr.response);
            // setCurrency(array);
            }
        }
    
        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send();
        })
    }

    sendList('GET', url, api_key)
        .then(data => dataProcessing(data))
        .catch(err => console.log(err))
    }

    useEffect(() => {getList()}, []);
    useEffect(() => {console.log(currences), [currences]})
    return (
        <div className='content'>
            <FormSearch 
                saerch={saerch} 
                sort={sort => sortCurrences(sort)}
                sortValue={selectedSort}
                getSaerchValue={getSaerchValue} />
            <hr className='content__line' />
            <CurrencesList 
                currences={currences}
                remove={removeCurrences}/>
            <Loader/>
        </div>
    )
}

export default Currences;