import React from 'react';
import loader from '../../../images/icon/loader.gif';

import cl from './LoaderCurrences.module.scss';

const Loader = () => {
    return (
        <div className={cl.loaderPage}>
            <div className={cl.loader}>
                <div className={cl.loader__wrapper}>
                    <img src={loader} alt="loader" className={cl.loader__image} />
                </div>
            </div>
            <div className={cl.loaderPage__wrapper}>
                <div className={cl.loaderPage__header}>
                    <div className={[cl.loaderPage__search, cl.search].join(' ')}>
                        <div className={cl.search__wrapper}>
                            <div className={[cl.loaderPage__block, cl.search__input].join(' ')}></div>
                            <div className={[cl.loaderPage__block, cl.search__button].join(' ')}></div>
                        </div>
                        <div className={cl.search__wrapper}>
                            <div className={[cl.loaderPage__block, cl.search__select].join(' ')}>
                        </div>
                        </div>
                        <div className={cl.search__block__line}>
                            <hr className={cl.search__line} />
                        </div>
                    </div>
                </div>
                <div className={cl.loaderPage__content}>
                    <div className={[cl.loaderPage__block, cl.loaderPage__card].join(' ')}></div>
                    <div className={[cl.loaderPage__block, cl.loaderPage__card].join(' ')}></div>
                    <div className={[cl.loaderPage__block, cl.loaderPage__card].join(' ')}></div>
                    <div className={[cl.loaderPage__block, cl.loaderPage__card].join(' ')}></div>
                    <div className={[cl.loaderPage__block, cl.loaderPage__card].join(' ')}></div>
                    <div className={[cl.loaderPage__block, cl.loaderPage__card].join(' ')}></div>
                    <div className={[cl.loaderPage__block, cl.loaderPage__card].join(' ')}></div>
                    <div className={[cl.loaderPage__block, cl.loaderPage__card].join(' ')}></div>
                    <div className={[cl.loaderPage__block, cl.loaderPage__card].join(' ')}></div>
                </div>
            </div>
        </div>
    )
}

export default Loader;