import { useState, useEffect, useMemo, useRef } from "react";
import { UsePaginationType, GetListCoinsType, CountType, ButtonsVisibleType } from "../type/typeHooks/typesUsePagination";

export const usePagination = (getListCoins: GetListCoinsType, count: CountType): UsePaginationType =>{
    const [numberButtons, setNumberButtons] = useState<number[]>([]);
    const [leftArrow, setLeftArrow] = useState<boolean>(false);
    const [rightArrow, setRightArrow] = useState<boolean>(false);
    const [buttonsVisible, setButtonsVisible] = useState<ButtonsVisibleType>({ min: 1, max: 10 });
    const [rangeNumber, setRangeNumber] = useState<number>(1);

    const scrollRight = (): void =>{

        let newButtonsRight: ButtonsVisibleType = {...buttonsVisible};

        for(let key in buttonsVisible){
            newButtonsRight[key as keyof ButtonsVisibleType] = buttonsVisible[key as keyof ButtonsVisibleType];
        }
        
        newButtonsRight.min = newButtonsRight.min + 10;
        newButtonsRight.max = newButtonsRight.max + 10;

        setButtonsVisible(newButtonsRight);
    }

    const scrollLeft = (): void =>{
        let newButtonsLeft: ButtonsVisibleType = {...buttonsVisible};

        for(let key in buttonsVisible){
            newButtonsLeft[key as keyof ButtonsVisibleType] = buttonsVisible[key as keyof ButtonsVisibleType];
        }
        
        newButtonsLeft.min = newButtonsLeft.min - 10;
        newButtonsLeft.max = newButtonsLeft.max - 10;

        setButtonsVisible(newButtonsLeft);
    }

    const countСoins = (numberPage: number): void =>{
        let result: number = 1;
        let second_number: number = numberPage * 9;
        let first_number: number = second_number - 8;

        getListCoins(first_number, second_number);

        result = numberPage;

        setRangeNumber(numberPage);
    }

    const range = useMemo(() => {
        return rangeNumber
    }, [rangeNumber]);

    useEffect(() => {
        let min: number = +buttonsVisible.min;
        let max: number = +buttonsVisible.max;
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

    // console.log(range);
    return [
        range,
        leftArrow,
        rightArrow,
        numberButtons,
        scrollRight,
        scrollLeft,
        countСoins
    ] as const
}