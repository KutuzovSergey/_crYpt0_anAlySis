import React, { useEffect, useState } from "react";
import MyButtonSmall from "../MyButtonSmall/MyButtonSmall";
import { usePagination } from "../../../hooks/usePagination";

import cl from "./Pagination.module.scss";

type Props = {
    getListCoins: (first_number: number, second_number: number) => void,
    count: string | number
}

const Pagination:React.FC<Props> = (props: Props) =>{

    const {range, leftArrow, rightArrow, numberButtons, scrollRight, scrollLeft, countСoins} = usePagination(props.getListCoins, props.count);

    const indicatorTrue: boolean = true;
    const indicatorFalse: boolean = false;

    return (
        <div className={cl.pagination}>
            <div className={cl.pagination__block}>
                {leftArrow
                ? <MyButtonSmall
                    activityIndicator={indicatorFalse}
                    onClick={() => scrollLeft()}>&lt;</MyButtonSmall>
                :
                ''}
            </div>
            <div className={cl.pagination__wrapper}>
                {  
                numberButtons.map((item) => 
                    <MyButtonSmall 
                        key={item}
                        activityIndicator={item === range ? indicatorTrue : indicatorFalse}
                        onClick={() => countСoins(item)}>{item}
                        </MyButtonSmall>)
                } 
            </div>
            <div className={cl.pagination__block}>
                {rightArrow
                ? <MyButtonSmall 
                    activityIndicator={indicatorFalse}
                    onClick={() => scrollRight()}>&gt;</MyButtonSmall>
                :
                ''}
            </div>
        </div>
    )
}

export default Pagination;