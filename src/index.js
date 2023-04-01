import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import App from './App';

import './styles/index.scss';
// import { configureStore } from '@reduxjs/toolkit';
// import { StoreContext } from "./store/context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <App />
    </Provider>
);

// context={StoreContext}