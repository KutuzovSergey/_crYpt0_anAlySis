import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InfoForm from "./UI/InfoForm/InfoForm";
import InfoInput from "./UI/InfoInput/InfoInput";
import MyInput from '../components/UI/MyInput/MyInput';
import MyButton from '../components/UI/MyButton/MyButton';
import FoundCoins from "./FoundCoins";
import { findingValueInArray } from "../utils/filters";
import searchImg from "../images/icon/search.svg";

import '../styles/componentStyles/Search.scss';

const Search = (props) =>{
    const allCoinList = useSelector(state => state.allCoinList.coinsList);

    const [search, setSaerch] = useState('');
    const [visible, setVisible] = useState(false);
    const [foundCoin, setFoundCoin] = useState([]);
    const [infoListInput, setInfoListInput] = useState([]);
    const [infoSearchShow, setInfoSearchShow] = useState(false);
    const [infoSearch, setInfoSearch] = useState('Введите короткон имя искомой криптовалюты или несколько через запятую');

    // отслеживает поискоый инпут
    const getSaerchValue = (value) =>{
        setSaerch(value);
    }
    
    // открыть информационное окно
    const openInfoSearch = () =>{
        setInfoSearchShow(true);
    }

    const closeInfoSearch = () =>{
        setInfoSearchShow(false);
        if(search === '') {
            setInfoSearch('Введите короткон имя искомой криптовалюты или несколько через запятую');
        }
    }

    // вызывает модальное окно с информацией
    const transferInput = (coinName) => {
        const result = [];
        
        if(foundCoin.includes(coinName)){
            props.openModalInfo('монета уже добавлена в список найденных')
            return
        } else if (foundCoin.length >= 10) {
            props.openModalInfo('нельзя выбрать более десяти монет для одного запроса')
            return
        } 
        
        result.push(coinName);
        
        setFoundCoin( (coins) => coins.concat(result));
        setSaerch('');
    }

    const deleteFoundCoin = (coin) =>{
        setFoundCoin(foundCoin.filter(item => item !== coin));
    }

    const checkSearchText = (text, arr) =>{

        text = text.toUpperCase();
        const newArr = arr.map(item => item.toUpperCase());
    
        return text.split(/[\s,]/g).filter(item => newArr.includes(item));
    }

    const sendSearchQuery = (e) =>{
        e.preventDefault();

        if (search !== '' || foundCoin.length) {
            const dataSearch = checkSearchText(search, allCoinList);

            if (!dataSearch.length && !foundCoin.length) {
                props.openModalInfo('в страке поиска ошибка, такой монеты несуществует');
            } else {
                const result = dataSearch.concat(foundCoin);
        
                props.fetchListOnPage(result);
                setInfoSearchShow(false);
                setFoundCoin([]);
                setSaerch('');
            }
            
        } else {
            props.openModalInfo('монеты не выбраны');
        }
        
    }

    // отслеживает ввод в поискоый инпут осуществляет поиск
    useEffect(() => {
        if (search === '') {
            setInfoSearch('Введите короткое имя искомой криптовалюты или несколько через запятую');
            setVisible(false);
        } else {
            let searchItem = findingValueInArray(allCoinList.slice(), search);

            if (searchItem.length) {
                const result = [];
                let i = 1;
                searchItem.forEach(item => result.push({text: item, id: ++i}));
                setInfoListInput(result);
                setVisible(true);
            } else if (!searchItem.length){
                setInfoSearch('монеты не найдены');
                setVisible(false);
            }
        }
    }, [search, allCoinList]);

    return (
        <div className="search">
                <div className="search__input__block">
                    {foundCoin.length ?
                        <FoundCoins 
                            coins={foundCoin}
                            deleteCoin={deleteFoundCoin} />
                        :
                        ''
                    }
                    
                    <MyInput 
                        type='text'
                        list=''
                        name='search'
                        autoComplete='off'
                        value={search}
                        placeholder='поиск'
                        onFocus={() => {openInfoSearch()}}
                        onChange={(e) => {getSaerchValue(e.target.value)}}/>

                    {infoSearchShow ?
                    <div>
                        <div className = {visible ? 'search__info-hide' : ''}>
                            <InfoForm 
                                infoText={infoSearch}/>
                        </div>
                        <div className = {visible ? '' : 'search__info-hide'}>
                            <InfoInput 
                                datalistId={'search'} 
                                visible={visible}
                                valueList={infoListInput} 
                                transferInput={transferInput}/>
                        </div>
                    </div>
                    :
                    ''
                    }
                </div>
                <div className="search__button">
                    <MyButton onClick={(e) => {sendSearchQuery(e)}}>
                        <img src={searchImg} alt="search" />
                    </MyButton>
                </div>
                {infoSearchShow ? 
                <div className='search__info__search__hide'
                    onClick={() => closeInfoSearch()}></div>
                    :
                    ''
                }
            </div>
    )
}

export default Search;