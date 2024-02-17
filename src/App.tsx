import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { changeIsAuth } from './action/actionCreators';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import AdaptiveMenu from './components/menus/AdaptiveMenu/AdaptiveMenu';

import './styles/App.scss';

function App() {
  const dispatch = useDispatch()
  const setUserStatus = () =>{
    if (localStorage.getItem('isAuth') !== null) {
      const valueIsAuth: string = localStorage.getItem('isAuth')!;
      dispatch(changeIsAuth(JSON.parse(valueIsAuth)));
    } else {
      localStorage.setItem('isAuth', 'false');
    }
  }

  useEffect(() => {setUserStatus()}, []);

  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <AppRouter/>
          <Footer/>
          <AdaptiveMenu/>
        </BrowserRouter>
    </div>
  );
}

export default App;