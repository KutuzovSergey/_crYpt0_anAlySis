import React, { useState } from "react";
import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/MyInput/MyInput';
import search from '../images/icon/search.svg'; 
import '../styles/componentStyles/FormSearch.scss';
import MySelect from "./UI/Select/MySelect";
import InfoForm from "./UI/InfoForm/InfoForm";

const FormSearch = (props) =>{
    const [options, setOptions] = useState([
        {name:'По алфавиту', vulue:'NAME'},
        {name:'По стоимости', vulue:'PRICE'},
        {name:'По капитализации', vulue:'CIRCULATINGSUPPLYMKTCAP'},
    ]);

    return(
        <form className="search">
            {props.infoSearchSowe ?
                <div 
                    className="search__info__form_hide"
                    onClick={() => {props.hideSearchInfo()}}
                ></div>
            :
            ''
            }
            
            <div className="search__input">
                <div className="search__input__block">
                    <MyInput 
                        type='text'
                        value={props.saerch}
                        placeholder='поиск'
                        onFocus={() => {props.soweSearchInfo()}}
                        // onBlur={() => {props.hideSearchInfo()}}
                        onChange={(e) => {props.getSaerchValue(e.target.value)}}/>
                    {props.infoSearchSowe ?
                    <InfoForm 
                        infoText={props.infoSearchText}
                        visible={props.visible}
                        transferInput={props.transferInput}/>
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

