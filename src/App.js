import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import MyButton from './components/UI/MyButton/MyButton';
import MyInput from './components/UI/MyInput/MyInput';
import Card from './components/Card';
import FormSearch from './components/FormSearch';
import CurrencesList from './components/CurrencesList';
import Loader from './components/UI/Loader/Loader';

function App() {

  // const conten = {
  //   XBTC: {id:877383, symbol: '0XBTC', partner_symbol: '0XBTC', data_available_from: 1517961600},
  //   ST: {id: 28328, symbol: '1ST', partner_symbol: '1ST', data_available_from: 1481241600},
  // }

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
 


 
  // const getList = async () =>{
  //   const array = [];
  //   let url = 'https://min-api.cryptocompare.com/data/blockchain/list?length=1&api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38'
  //   let response = await fetch(url);
  //   let result = await response.json();
  //   console.log(response);
  //   setCurrency(result);
  //   // if(result.ok){
  //   //   setCurrency(result);
  //   // } else {
  //   //   console.log(`Ошибка HTTP: ${response.status}`);
  //   // }
  // }

  useEffect(() => {getList()}, []);
  useEffect(() => {console.log(currences), [currences]})

  return (
    <div className="App">
      <Header/>
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
        {/* <Loader/> */}
      </div>
    </div>
  );
}

export default App;





// 1WO
// : 
// {id: 925200, symbol: '1WO', partner_symbol: '1WO', data_available_from: 1512000000}
// AAC
// : 
// {id: 925291, symbol: 'AAC', partner_symbol: 'AAC', data_available_from: 1514505600}
// ABCC
// : 
// {id: 925864, symbol: 'ABCC', partner_symbol: 'AT', data_available_from: 1531008000}
// ABT
// : 
// {id: 758055, symbol: 'ABT', partner_symbol: 'ABT', data_available_from: 1519344000}
// ABYSS
// : 
// {id: 419711, symbol: 'ABYSS', partner_symbol: 'ABYSS', data_available_from: 1524009600}
// ACCN
// : 
// {id: 716854, symbol: 'ACCN', partner_symbol: 'ACC', data_available_from: 1507248000}
// ACE
// : 
// {id: 294364, symbol: 'ACE', partner_symbol: 'ACE', data_available_from: 1510012800}
// ADA
// : 
// {id: 321992, symbol: 'ADA', partner_symbol: 'ADA', data_available_from: 1506124800}
// ADB
// : 
// {id: 468052, symbol: 'ADB', partner_symbol: 'ADB', data_available_from: 1513123200}
// ADH
// : 
// {id: 866454, symbol: 'ADH', partner_symbol: 'ADH', data_available_from: 1523318400}
// ADI
// : 
// {id: 780883, symbol: 'ADI', partner_symbol: 'ADI', data_available_from: 1514419200}
// ADL
// : 
// {id: 127738, symbol: 'ADL', partner_symbol: 'ADL', data_available_from: 1516752000}
// ADT
// : 
// {id: 188858, symbol: 'ADT', partner_symbol: 'ADT', data_available_from: 1497830400}
// ADX
// : 
// {id: 170452, symbol: 'ADX', partner_symbol: 'ADX', data_available_from: 1498780800}
// AE
// : 
// {id: 190978, symbol: 'AE', partner_symbol: 'AE', data_available_from: 1504310400}
// AEN
// : 
// {id: 924988, symbol: 'AEN', partner_symbol: 'AEN', data_available_from: 1525046400}
// AERGO
// : 
// {id: 928382, symbol: 'AERGO', partner_symbol: 'AERGO', data_available_from: 1542844800}
// AGI
// : 
// {id: 710156, symbol: 'AGI', partner_symbol: 'AGI', data_available_from: 1513814400}
// AGVC
// : 
// {id: 928332, symbol: 'AGVC', partner_symbol: 'AGVC', data_available_from: 1551657600}
// AID
// : 
// {id: 368770, symbol: 'AID', partner_symbol: 'AID', data_available_from: 1511136000}
// AIDOC
// : 
// {id: 684818, symbol: 'AIDOC', partner_symbol: 'AIDOC', data_available_from: 1513468800}
// AIT
// : 
// {id: 777027, symbol: 'AIT', partner_symbol: 'AIT', data_available_from: 1515110400}
// AIX
// : 
// {id: 187030, symbol: 'AIX', partner_symbol: 'AIX', data_available_from: 1510617600}
// ALIS
// : 
// {id: 331603, symbol: 'ALIS', partner_symbol: 'ALIS', data_available_from: 1503619200}
// ALX
// : 
// {id: 787696, symbol: 'ALX', partner_symbol: 'ALX', data_available_from: 1525305600}
// AMB
// : 
// {id: 238733, symbol: 'AMB', partner_symbol: 'AMB', data_available_from: 1508630400}
// AMLT
// : 
// {id: 925145, symbol: 'AMLT', partner_symbol: 'AMLT', data_available_from: 1510272000}
// AMM
// : 
// {id: 589881, symbol: 'AMM', partner_symbol: 'AMM', data_available_from: 1505260800}
// AMN
// : 
// {id: 890663, symbol: 'AMN', partner_symbol: 'AMN', data_available_from: 1519430400}
// AMO
// : 
// {id: 889900, symbol: 'AMO', partner_symbol: 'AMO', data_available_from: 1524528000}

// CIRCULATINGSUPPLYMKTCAP капитолизация
// HIGH24HOUR самый высокий показатель за период
// CHANGE24HOUR изменения цены  за период
// LOW24HOUR самый низкий показатель за перииод
// PRICE цена
// SUPPLY тоже, что и капитализация