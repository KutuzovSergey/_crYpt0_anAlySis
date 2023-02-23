import React, { useState } from "react";
import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/MyInput/MyInput';
import search from '../images/icon/search.svg'; 
import '../styles/componentStyles/FormSearch.scss';
import MySelect from "./UI/Select/MySelect";

const FormSearch = (props) =>{
    const [options, setOptions] = useState([
        {name:'По алфавиту', vulue:'alphabet'},
        {name:'По стоимости', vulue:'price'},
    ]);
    return(
        <form className="search">
            <div className="search__input">
                <MyInput 
                    type='text'
                    value={props.saerch}
                    placeholder='поиск'
                    onChange={(e) => {props.getSaerchValue(e.target.value)}}/>
                <MyButton>
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

