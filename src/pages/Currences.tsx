import React, { useEffect } from 'react';
import MyModal from '../components/UI/MyModal/MyModal';
import Pagination from '../components/UI/Pagination/Pagination';
import LoaderCurrences from '../components/UI/LoaderCurrences/LoaderCurrences';
import FormSearch from '../components/FormSearch';
import CurrencesList from '../components/CurrencesList';
import { getAllList, getListOnPage } from '../AP/getCoins';
import { useDispatch, useSelector } from 'react-redux';
import { allCoinListConst } from '../constants/constants';
import { useCurrences } from '../hooks/useCurrences';

import '../styles/Currences.scss';

const Currences:React.FC = () => {

    const dispatch = useDispatch();

    const [isLoadingCoin, 
        selectedSort,
        foundCoin,
        sortCurrences,
        fetchListOnPage,
        openModalInfo,
        currences,
        removeCurrences,
        totalCount,
        getListCoins,
        modalInfo,
        setModalInfo,
        modalInfoText] = useCurrences();

    // console.log(foundCoin);
    const getAllCoins = async () => {
        dispatch({type:allCoinListConst.GET_COINS_LIST, payload: await getAllList()});
    }

    useEffect(() => {getAllCoins()}, []);
    
    if (isLoadingCoin){
        return <LoaderCurrences/>
    }
    
    return (
        <div className='content'>
            <FormSearch 
                sortValue={selectedSort}
                sort={sort => sortCurrences(sort)}
                // foundCoin={foundCoin} 
                openModalInfo={openModalInfo}
                fetchListOnPage={fetchListOnPage}
                />
            <hr className='content__line' />
            <CurrencesList 
                currences={currences}
                textInfo={'Монеты не найдены'}
                remove={removeCurrences}/>
            <Pagination count={totalCount} getListCoins={getListCoins} />
            <MyModal active={modalInfo} setActive={setModalInfo}>
                <div className='content__modal__info'>
                    <span className='content__modal__info__text'>{modalInfoText}</span>
                </div>
            </MyModal>
            
        </div>
    )
}

export default Currences;