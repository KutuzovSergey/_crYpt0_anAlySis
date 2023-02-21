import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;


// CIRCULATINGSUPPLYMKTCAP капитолизация
// HIGH24HOUR самый высокий показатель за период
// CHANGE24HOUR изменения цены  за период
// LOW24HOUR самый низкий показатель за перииод
// PRICE цена
// SUPPLY тоже, что и капитализация