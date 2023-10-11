import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import {AppContext} from './context/index.js';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import AdaptiveMenu from './components/menus/AdaptiveMenu/AdaptiveMenu';

import './styles/App.scss';



function App() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegistr, setModalRegistr] = useState(false);
  const [errorPages, setErrorPages] = useState(false);
  const [menuAdaptive, setMenuAdaptive] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const setUserStatus = () =>{
    if (localStorage.getItem('isAuth') !== null) {
      const valueIsAuth = localStorage.getItem('isAuth');
      setIsAuth(JSON.parse(valueIsAuth));
    } else {
      localStorage.setItem('isAuth', false);
    }
  }

  useEffect(() => {setUserStatus()}, []);

  return (
    <div className="App">
      <AppContext.Provider value={{
        isAuth,
        setIsAuth,
        modalLogin,
        setModalLogin,
        errorPages,
        setErrorPages,
        modalRegistr,
        setModalRegistr,
        menuAdaptive,
        setMenuAdaptive,
      }}>
        <BrowserRouter>
          <Header/>
          <AppRouter/>
          <Footer/>
          <AdaptiveMenu/>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;