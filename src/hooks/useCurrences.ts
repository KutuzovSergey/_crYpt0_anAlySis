import { useState, useLayoutEffect, useEffect, useCallback } from "react";
import { useFetching } from '../hooks/useFetching';
import { sortArray } from '../utils/sorting';
import { getListOnPage } from '../AP/getCoins';
import { useSelector } from 'react-redux';
import { calculateTotal } from '../utils/totalCount';
import { RootState } from "../store";
import { ObjCoinsType } from "../type/typeComponents/typesMain";

export const useCurrences = () =>{
    const allCoinList: any = useSelector((state: RootState) => state.allCoinList.coinsList);
    const [foundCoin, setFoundCoin] = useState([]);

    const [modalInfo, setModalInfo] = useState(false);
    const [selectedSort, setSelectedSort] = useState('');
    const [currences, setCurrences] = useState([]);
    const [modalInfoText, setModalInfoText] = useState('');
    const [displayedCoins, setDisplayedCoins] = useState([]);
    const [totalCount, setTotalCount] = useState<number>(0);

    const [fetchCoin, isLoadingCoin, fetchCoinsToList, isLoadingList] = useFetching(async (params: string[]): Promise<any> => {
        return await getListOnPage(params)
    });

    // сортировка
    const sortCurrences = (sort: any) =>{
        // console.log(sort);
        const copyCurrences = currences.slice();
       
        setSelectedSort(sort);
        sortArray( sort, 'NAME', copyCurrences);
        setCurrences(copyCurrences);
    }

    const getDisplayedCoins = async (coins: string[], min: number, max: number) =>{
        const result: string[] = [];
        coins.forEach( (item: string) => {
            if (coins.indexOf(item) >= min && coins.indexOf(item) <= max) {
                result.push(item);
            }
        });

        setDisplayedCoins(result as never[]);
    }

    const getListCoins = useCallback( (indexMin: number, indexMax: number): void =>{
        getDisplayedCoins(allCoinList, indexMin, indexMax);
    }, []);

    const removeCurrences = (currency: ObjCoinsType): void =>{
        // console.log(currency);
        setCurrences(currences.filter((item: ObjCoinsType) => item.NAME !== currency.NAME));
    }

    const openModalInfo = (text: string): void =>{
        setModalInfoText(text);
        setModalInfo(true);
    }

    const getTotalCount = (): void => {
        // console.log('eys')
        setTotalCount(calculateTotal(allCoinList, 9));
    }

    const fetchListOnPage = async (coinList: string[]): Promise<any>  =>{
        setCurrences( await fetchCoin(coinList));
    }

    const fetchListNextPage = async (coinList: string[]): Promise<any> =>{
        setCurrences( await fetchCoinsToList(coinList));
    }

    useEffect(() => {fetchListNextPage(displayedCoins)}, [displayedCoins]);
    useEffect(() => {getListCoins(1, 10)}, [allCoinList]);
    useEffect(() => {getTotalCount()}, [allCoinList]);

    return [
        isLoadingCoin,
        selectedSort,
        foundCoin,
        sortCurrences,
        fetchListOnPage,
        openModalInfo,
        currences,
        removeCurrences,
        totalCount,
        getListCoins,
        modalInfo,
        setModalInfo,
        modalInfoText,
        isLoadingList,
    ] as const
}