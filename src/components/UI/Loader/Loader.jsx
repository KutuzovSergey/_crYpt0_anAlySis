import React from 'react';
import cl from './Loader.module.scss';
import loader from '../../../images/icon/loader.gif';

const Loader = () => {
    return (
        <div className={cl.loader}>
            <img src={loader} alt="loader" className={cl.loader__image} />
        </div>
    )
}

export default Loader;