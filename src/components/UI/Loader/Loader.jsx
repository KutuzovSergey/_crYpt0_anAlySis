import React from 'react';
import cl from './Loader.module.scss';
import loader from '../../../images/icon/loader.gif';

const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} alt="loader" />
        </div>
    )
}

export default Loader;