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
  const list = {};
  const [currences, setCurrency] = useState(list);
  const [saerch, setSaerch] = useState('');

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

  const getList = async () =>{
    const array = [];
    let url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR'
    let response = await fetch(url);
    let result = await response.json();
    setCurrency(result);
    // if(result.ok){
    //   setCurrency(result);
    // } else {
    //   console.log(`Ошибка HTTP: ${response.status}`);
    // }
  } 

  useEffect(() => {getList()}, []);

  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <FormSearch saerch={saerch} getSaerchValue={getSaerchValue} />
        <CurrencesList 
          className='content__block'
          currences={currences}
          remove={removeCurrences}/>
        <Loader/>
      </div>
    </div>
  );
}

export default App;
