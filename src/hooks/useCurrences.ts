import { useState, useLayoutEffect, useEffect } from "react";
import { useFetching } from '../hooks/useFetching';
import { sortArray } from '../utils/sorting';
import { getAllList, getListOnPage } from '../AP/getCoins';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from '../utils/totalCount';
import { RootState } from "../store";
import { UseFetchingCallbackType } from "../type/typesUseCurrences";

export const useCurrences = () =>{
    const allCoinList: any = useSelector((state: RootState) => state.allCoinList.coinsList);
    const [foundCoin, setFoundCoin] = useState([]);

    const [modalInfo, setModalInfo] = useState(false);
    const [selectedSort, setSelectedSort] = useState('');
    const [currences, setCurrences] = useState([]);
    const [modalInfoText, setModalInfoText] = useState('');
    const [displayedCoins, setDisplayedCoins] = useState([]);
    const [totalCount, setTotalCount] = useState<string | number>('');

    const [fetchCoin, isLoadingCoin] = useFetching(async (params: UseFetchingCallbackType): Promise<any> => {
        return await getListOnPage(params)
    });

    // сортировка
    const sortCurrences = (sort: any) =>{
        const copyCurrences = currences.slice();
       
        setSelectedSort(sort);
        sortArray(sort, 'NAME', copyCurrences);
        setCurrences(copyCurrences);
    }

    const getDisplayedCoins = async (coins: any, min: number, max: number) =>{
        const result: string[] = [];
        coins.forEach( (item: any) => {
            if (coins.indexOf(item) >= min && coins.indexOf(item) <= max) {
                result.push(item);
            }
        });

        setDisplayedCoins(result as never[]);
    }

    const getListCoins = (indexMin: number, indexMax: number): void =>{
        getDisplayedCoins(allCoinList, indexMin, indexMax);
    }

    const removeCurrences = (currency: any): void =>{
        setCurrences(currences.filter((item: any) => item.NAME !== currency.NAME));
    }

    const openModalInfo = (text: string): void =>{
        setModalInfoText(text);
        setModalInfo(true);
    }

    const getTotalCount = () => {
        setTotalCount(calculateTotal(allCoinList, 9));
    }

    const fetchListOnPage = async (coinList: string[]): Promise<any>  =>{
        setCurrences( await fetchCoin(coinList));
    }

    useEffect(() => {fetchListOnPage(displayedCoins)}, [displayedCoins]);
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
    ] as const
}