import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import {AutchContext} from './context/index.js';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

import './styles/App.scss';


function App() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegistr, setModalRegistr] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [errorPages, setErrorPages] = useState(false);

  return (
    <div className="App">
      <AutchContext.Provider value={{
        isAuth,
        setIsAuth,
        modalLogin,
        setModalLogin,
        errorPages,
        setErrorPages,
        modalRegistr,
        setModalRegistr,
      }}>
        <BrowserRouter>
          <Header/>
          <AppRouter/>
          <Footer/>
        </BrowserRouter>
      </AutchContext.Provider>
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