import React from 'react';
import loader from '../../../images/icon/loader.gif';

import cl from './LoaderCurrencesList.module.scss';

const LoaderCurrencesList:React.FC = () => {
    return (
        <div className={cl.loaderPage}>
             <div className={cl.loader}>
                <div className={cl.loader__wrapper}>
                    <img src={loader} alt="loader" className={cl.loader__image} />
                </div>
            </div>
            <div className={cl.loaderPage__content}>
                <div className={cl.loaderPage__card}></div>
                <div className={cl.loaderPage__card}></div>
                <div className={cl.loaderPage__card}></div>
                <div className={cl.loaderPage__card}></div>
                <div className={cl.loaderPage__card}></div>
                <div className={cl.loaderPage__card}></div>
                <div className={cl.loaderPage__card}></div>
                <div className={cl.loaderPage__card}></div>
                <div className={cl.loaderPage__card}></div>
            </div>
        </div>
    )
}

export default LoaderCurrencesList;