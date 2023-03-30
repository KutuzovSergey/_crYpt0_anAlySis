import React, { useEffect, useState } from "react";
import search from '../images/icon/search.svg'; 
import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/MyInput/MyInput';
import MySelect from "./UI/Select/MySelect";
import InfoForm from "./UI/InfoForm/InfoForm";
import InfoInput from "./UI/InfoInput/InfoInput";

import '../styles/componentStyles/FormSearch.scss';
import FoundCoins from "./FoundCoins";

const FormSearch = (props) =>{
    const [options, setOptions] = useState([
        {name:'По алфавиту', vulue:'NAME'},
        {name:'По стоимости', vulue:'PRICE'},
        {name:'По капитализации', vulue:'CIRCULATINGSUPPLYMKTCAP'},
    ]);

    return(
        <form className="search">
            
            <div className="search__input">
                <div className="search__input__block">
                    <FoundCoins 
                        coins={props.foundCoin}
                        deleteCoin={props.deleteFoundCoin} />
                    <MyInput 
                        type='text'
                        list=''
                        name='search'
                        autoComplete='off'
                        value={props.search}
                        placeholder='поиск'
                        onFocus={() => {props.soweSearchInfo()}}
                        // onBlur={() => {props.hideSearchInfo()}}
                        onChange={(e) => {props.getSaerchValue(e.target.value)}}/>

                    {props.infoSearchShowe ?
                    <div>
                        <div className = {props.visible ? 'search__info-hide' : ''}>
                            <InfoForm 
                                infoText={props.infoSearchText}/>
                        </div>
                        <div className = {props.visible ? '' : 'search__info-hide'}>
                            <InfoInput 
                                datalistId={'search'} 
                                visible={props.visible}
                                valueList={props.infoListInput} 
                                transferInput={props.transferInput}/>
                        </div>
                    </div>
                    :
                    ''
                    }
                </div>
                <MyButton className="search__button" onClick={(e) => {props.sendSearchQuery(e)}}>
                    <img src={search} alt="search" />
                </MyButton>
            </div>
            
            <div className="search__sorting">
                <MySelect 
                    value={props.sortValue}
                    options={options}
                    defaultVulue={'сортировка'}
                    onChange={props.sort}/>
            </div>
        </form>
    )
}

export default FormSearch;

