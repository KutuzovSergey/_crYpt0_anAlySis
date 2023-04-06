import React, { useState } from "react";
import MySelect from "./UI/Select/MySelect";
import Search from "./Search";

import '../styles/componentStyles/FormSearch.scss';

const FormSearch = (props) =>{
    const [options, setOptions] = useState([
        {name:'По алфавиту', vulue:'NAME'},
        {name:'По стоимости', vulue:'PRICE'},
        {name:'По капитализации', vulue:'CIRCULATINGSUPPLYMKTCAP'},
    ]);

    return(
        <form className="FormSearch">
            <Search 
                    fetchListOnPage={props.fetchListOnPage}
                    statusSearchInfo={props.statusSearchInfo}
                    openModalInfo={props.openModalInfo}/>
            <div className="FormSearch__sorting">
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

