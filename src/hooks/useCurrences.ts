import { useState, useEffect, useCallback } from "react";
import { useFetching } from '../hooks/useFetching';
import { sortArray } from '../utils/sorting';
import { getListOnPage } from '../AP/getCoins';
import { useSelector } from 'react-redux';
import { calculateTotal } from '../utils/totalCount';
import { RootState } from "../store";
import { CurrencesType, ObjCoinsType } from "../type/typeComponents/typesMain";
import { UseCurrencesType } from "../type/typeHooks/typesUseCurrences";

export const useCurrences = (): UseCurrencesType =>{
    const allCoinList: string[] = useSelector((state: RootState) => state.allCoinList.coinsList);
    const [foundCoin, setFoundCoin] = useState<string[]>([]);
    
    const [modalInfo, setModalInfo] = useState<boolean>(false);
    const [selectedSort, setSelectedSort] = useState<string>('');
    const [currences, setCurrences] = useState<CurrencesType>([]);
    const [modalInfoText, setModalInfoText] = useState<string>('');
    const [displayedCoins, setDisplayedCoins] = useState<string[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);

    const [fetchCoin, isLoadingCoin, fetchCoinsToList, isLoadingList, coinNotFound] = useFetching(async (params: string[]): Promise<any> => {
        return await getListOnPage(params)
    });

    // сортировка
    const sortCurrences = (sort: string) =>{
        const copyCurrences = currences.slice();
       
        setSelectedSort(sort);
        let sortKey: any = sort;
        sortArray( sortKey, 'NAME', copyCurrences);
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
        setCurrences(currences.filter((item: ObjCoinsType) => item.NAME !== currency.NAME));
    }

    const openModalInfo = (text: string): void =>{
        setModalInfoText(text);
        setModalInfo(true);
    }

    const getTotalCount = (): void => {
        setTotalCount(calculateTotal(allCoinList, 9));
    }

    const fetchListNextPage = async (coinList: string[]): Promise<any> =>{
        setCurrences( await fetchCoinsToList(coinList));
    }

    useEffect(() => {fetchListNextPage(displayedCoins)}, [displayedCoins]);
    useEffect(() => {getListCoins(1, 10)}, [allCoinList]);
    useEffect(() => {getTotalCount()}, [allCoinList]);
    useEffect(() => {
        if (coinNotFound) {
            openModalInfo('Информация о монете отсутствует на хостинге');
        }
    }, [coinNotFound]);
    
    return [
        isLoadingCoin,
        selectedSort,
        foundCoin,
        sortCurrences,
        fetchListNextPage,
        openModalInfo,
        currences,
        removeCurrences,
        totalCount,
        getListCoins,
        modalInfo,
        setModalInfo,
        modalInfoText,
        isLoadingList,
        coinNotFound,
    ]
}