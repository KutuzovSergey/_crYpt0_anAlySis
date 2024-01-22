import { useRef } from "react";
import { CallbackType, UseFetchingType } from "../type/typeHooks/typesUseFetching";
import { CurrencesType } from "../type/typeComponents/typesMain";

export const useFetching = (callback: CallbackType): UseFetchingType =>{
    const isLoading = useRef(false);
    const isLoadingList = useRef(false);
    
    const fetchCoin = async (params: string[]): Promise<CurrencesType> =>{
        isLoading.current = true;
        let result = await callback(params);
        isLoading.current = false;
        return result
    }

    const fetchCoinsToList = async (params: string[]): Promise<CurrencesType> =>{
        isLoadingList.current = true;
        let result = await callback(params);
        isLoadingList.current = false;
        return result
    }

    return [
        fetchCoin, 
        isLoading.current, 
        fetchCoinsToList,
        isLoadingList.current,
    ]
}