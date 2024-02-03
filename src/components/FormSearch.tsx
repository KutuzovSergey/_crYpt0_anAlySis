import React, { useState, memo } from "react";
import MySelect from "./UI/MySelect/MySelect";
import Search from "./Search";
import { SelectType } from "../type/typeComponents/typesSearchSelect";
import { ObjCoinsType } from "../type/typeComponents/typesMain";

import '../styles/componentStyles/FormSearch.scss';

type Props = {
    sortValue: string,
    foundCoin: string[],
    sort: (e: string) => void,
    fetchListNextPage: (foundCoin: string[]) => void,
    openModalInfo: (text: string) => void,
}

const FormSearch:React.FC<Props> = memo( (props: Props) =>{
    const [options, setOptions] = useState<SelectType>([
        {name:'По алфавиту', value:'NAME'},
        {name:'По стоимости', value:'PRICE'},
        {name:'По капитализации', value:'CIRCULATINGSUPPLYMKTCAP'},
    ]);

    return(
        <form className="FormSearch">
            <Search 
                    fetchListNextPage={props.fetchListNextPage}
                    openModalInfo={props.openModalInfo}/>
            <div className="FormSearch__sorting">
                <MySelect 
                    value={props.sortValue}
                    options={options}
                    defaultValue={'сортировка'}
                    onChange={props.sort}/>
            </div>
        </form>
    )
});

export default FormSearch;

