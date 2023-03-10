import React, { useEffect, useState } from "react";
import cl from "./Pagination.module.scss";
import MyButtonSmall from "../MyButtomSmall/MyButtomSmall";

const Pagination = (props) =>{

    const [numberButtons, setNumberButtons] = useState([]);
    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState({ min: 1, max: 10 });
    const [range, setRange] = useState(1);

    const createButtons = () =>{
        let min = buttonsVisible.min;
        let max = buttonsVisible.max;
        let result = [];

        while(min <= props.count && min <= max){
            result.push(min);
            min = ++min;
        }

        props.count > 10 ? setRightArrow(true) : '';

        buttonsVisible.max >= props.count ? setRightArrow(false) : '';

        buttonsVisible.min > 10 ? setLeftArrow(true) : setLeftArrow(false);

        setNumberButtons(result);
    }

    const scrollRight = () =>{
        let nawObject = {}

        for(let key in buttonsVisible){
            nawObject[key] = buttonsVisible[key];
        }
        
        nawObject.min = nawObject.min + 10;
        nawObject.max = nawObject.max + 10;

        setButtonsVisible(nawObject);
    }

    const scrollLeft = () =>{
        let nawObject = {}

        for(let key in buttonsVisible){
            nawObject[key] = buttonsVisible[key];
        }
        
        nawObject.min = nawObject.min - 10;
        nawObject.max = nawObject.max - 10;

        setButtonsVisible(nawObject);
    }

    const countСoins = (number) =>{
        let result = 1;
        let second_number = number * 9;
        let first_number = second_number - 8;

        props.getListCoins(first_number, second_number);

        result = number;

        setRange(result);
    }
    
    useEffect(() => {createButtons()}, [props.count, buttonsVisible]);

    const indicatorTrue = true;
    const indicatorFalse = false;

    console.log(range);
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