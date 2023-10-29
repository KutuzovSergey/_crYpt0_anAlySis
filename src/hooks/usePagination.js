import { useState, useEffect } from "react";

export const usePagination = (getListCoins, count) =>{
    const [numberButtons, setNumberButtons] = useState([]);
    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState({ min: 1, max: 10 });
    const [range, setRange] = useState(1);

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
            console.log(key);
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

        // console.log(`Активность ${first_number} Текст - ${second_number}`);

        getListCoins(first_number, second_number);

        result = number;

        setRange(result);
    }

    useEffect(() => {
        let min = +buttonsVisible.min;
        let max = +buttonsVisible.max;
        let result = [];
    
        while(min <= count && min <= max){
            result.push(min);
            min = ++min;
        }
    
        if (count > 10) {
            setRightArrow(true);
        } else if (+buttonsVisible.max >= count) {
            setRightArrow(false);
        }
        
        +buttonsVisible.min > 10 ? setLeftArrow(true) : setLeftArrow(false);

        setNumberButtons(result);

    }, [count, buttonsVisible]);

    return {
        range,
        leftArrow,
        rightArrow,
        numberButtons,
        scrollRight,
        scrollLeft,
        countСoins
    }
}