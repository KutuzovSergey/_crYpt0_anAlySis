import React, { useEffect } from 'react';
import MyModal from '../components/UI/MyModal/MyModal';
import Pagination from '../components/UI/Pagination/Pagination';
import LoaderCurrences from '../components/UI/LoaderCurrences/LoaderCurrences';
import FormSearch from '../components/FormSearch';
import CurrencesList from '../components/CurrencesList';
import { getAllList } from '../AP/getCoins';
import { useDispatch } from 'react-redux';
import { useCurrences } from '../hooks/useCurrences';
import { getAllCoinsList } from '../action/actionCreators';

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
        modalInfoText,
        isLoadingList] = useCurrences();

    const getAllCoins = async () => {
        dispatch(getAllCoinsList(await getAllList()));
    }

    useEffect(() => {getAllCoins()}, []);
    
    if (isLoadingCoin){
        return <LoaderCurrences/>
    }
    
    return (
        <div className='content'>
            <FormSearch 
                sortValue={selectedSort}
                foundCoin={foundCoin} 
                sort={sort => sortCurrences(sort)}
                fetchListOnPage={fetchListOnPage}
                openModalInfo={openModalInfo}
                />
            <hr className='content__line' />
            <CurrencesList 
                currences={currences}
                textInfo={'Монеты не найдены'}
                remove={removeCurrences}
                isLoadingList={isLoadingList}
                displayingAdd={true} 
                />
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