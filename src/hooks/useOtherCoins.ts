import { useState, useEffect } from "react";
import { ObjectOptionsType, SelectType } from "../type/typeHooks/typesUseOtherCoins";

export const useSelectOtherCoins = (allCoins: string[]) =>{
    const [optionsAllCoins, setOptionsAllCoins] = useState<SelectType>([]);
    const [valueSelect, setValueSelect] = useState<string>('');

    const getOptionsAllCoins = (allCoins: string[]): void =>{
        const newOptionsAllCoins: SelectType = [];

        if(allCoins.length > 0){
            allCoins.forEach( (item) => {
                const objectCoinOptions: ObjectOptionsType = {
                    name: '',
                    value: ''
                }
                objectCoinOptions.name = item
                objectCoinOptions.value = item
                newOptionsAllCoins.push(objectCoinOptions);
            });
            setOptionsAllCoins(newOptionsAllCoins);
        }
    }

    const getSelectedCoin = (coinName: string) =>{
        setValueSelect(coinName);
    }

    useEffect( () => {
        getOptionsAllCoins(allCoins)
    }, []);

    return [
        optionsAllCoins,
        valueSelect,
        getSelectedCoin,
    ] as const
}