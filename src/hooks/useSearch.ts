import { useState, useLayoutEffect, useEffect } from "react";
import { findingValueInArray } from "../utils/filters";
import { useSelector } from "react-redux";
import { SearchItemType } from "../type/typeHooks/typesUseSearch";

export const useSearch = (openModalInfo: (text: string) => void, fetchListOnPage: (foundCoin: any) => void) =>{

    const allCoinList = useSelector((state: any) => state.allCoinList.coinsList);

    const [searchValue, setSearchValue] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);
    const [foundCoin, setFoundCoin] = useState([]);
    const [infoListInput, setInfoListInput] = useState<string[]>([]);
    const [infoSearchShow, setInfoSearchShow] = useState<boolean>(false);
    const [infoSearch, setInfoSearch] = useState<string>('Введите короткон имя искомой криптовалюты или несколько через запятую');

    // отслеживает поискоый инпут
    const getSaerchValue = (value: string): void =>{
        setSearchValue(value);
    }
    
    // открыть информационное окно
    const openInfoSearch = (): void =>{
        setInfoSearchShow(true);
    }

    const closeInfoSearch = (): void =>{
        setInfoSearchShow(false);
        if(searchValue === '') {
            setInfoSearch('Введите короткон имя искомой криптовалюты или несколько через запятую');
        }
    }

    // вызывает модальное окно с информацией
    const transferInput = (coinName: string): void => {
        const result: string[] = [];
        
        if(foundCoin.includes(coinName as never)){
            openModalInfo('монета уже добавлена в список найденных')
            return
        } else if (foundCoin.length >= 10) {
            openModalInfo('нельзя выбрать более десяти монет для одного запроса')
            return
        } 
        
        result.push(coinName);
        
        setFoundCoin( (coins) => coins.concat(result as never));
        setSearchValue('');
    }

    const deleteFoundCoin = (coin: string): void =>{
        setFoundCoin(foundCoin.filter(item => item !== coin));
    }

    const checkSearchText = (text: string, arr: string[]): string[] =>{

        text = text.toUpperCase();
        const newArr = arr.map(item => item.toUpperCase());
    
        return text.split(/[\s,]/g).filter(item => newArr.includes(item));
    }

    const sendSearchQuery = (e: React.MouseEvent<HTMLElement>): void =>{
        e.preventDefault();

        if (searchValue !== '' || foundCoin.length) {
            const dataSearch = checkSearchText(searchValue, allCoinList);

            if (!dataSearch.length && !foundCoin.length) {
                openModalInfo('в страке поиска ошибка, такой монеты несуществует');
            } else {
                const result = dataSearch.concat(foundCoin);
        
                fetchListOnPage(result);
                setInfoSearchShow(false);
                setFoundCoin([]);
                setSearchValue('');
            }
            
        } else {
            openModalInfo('монеты не выбраны');
        }
        
    }
    
    // отслеживает ввод в поискоый инпут осуществляет поиск
    useEffect(() => {
        if (searchValue === '') {
            setInfoSearch('Введите короткое имя искомой криптовалюты или несколько через запятую');
            setVisible(false);
        } else {
            let searchItem: any = findingValueInArray(allCoinList.slice(), searchValue);

            if (searchItem.length) {
                const result: any = [];
                let i = 1;
                searchItem.forEach((item: any) => result.push({text: item, id: ++i}));
                setInfoListInput(result);
                setVisible(true);
            } else if (!searchItem.length){
                setInfoSearch('монеты не найдены');
                setVisible(false);
            }
        }
    }, [searchValue, allCoinList]);
    return [
        searchValue,
        visible,
        foundCoin,
        infoListInput,
        infoSearchShow,
        infoSearch,
        getSaerchValue,
        openInfoSearch,
        closeInfoSearch,
        transferInput,
        deleteFoundCoin,
        sendSearchQuery,
    ] as const
}