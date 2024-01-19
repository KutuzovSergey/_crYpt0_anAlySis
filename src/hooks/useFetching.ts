import { useState, useRef } from "react";
import { UseFetchingCallbackType } from "../type/typeHooks/typesUseCurrences";
import { CallbackType } from "../type/typeHooks/typesUseFetching";

export const useFetching = (callback: CallbackType) =>{
    const isLoading = useRef(false);
    const isLoadingList = useRef(false);
    
    const fetchCoin = async (params: string[]) =>{
        isLoading.current = true;
        let result = await callback(params);
        isLoading.current = false;
        return result
    }

    const fetchCoinsToList = async (params: string[]) =>{
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
    ] as const
}