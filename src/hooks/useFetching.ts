import { useRef, useState } from "react";
import { CallbackType, UseFetchingType } from "../type/typeHooks/typesUseFetching";
import { CurrencesType } from "../type/typeComponents/typesMain";
import { checkingUndefined } from "../utils/checks";

export const useFetching = (callback: CallbackType): UseFetchingType =>{
    const [isLoading, setIsLoading]= useState(false);
    const [isLoadingList, setIsLoadingList] = useState<boolean>(false);
    const [coinNotFound, setCoinNotFound] = useState<boolean>(false);
    
    const fetchCoin = async (params: string[]): Promise<CurrencesType> =>{
        setIsLoading(true);
        let result = await callback(params);
        setIsLoading(false);
        return result
    }

    const fetchCoinsToList = async (params: string[]): Promise<CurrencesType> =>{
        setIsLoadingList(true);
        let result = await callback(params);

        if (checkingUndefined(result)) {
            setCoinNotFound(true);
            setIsLoadingList(false);
            
            return []
        } else {
            setCoinNotFound(false);
            setIsLoadingList(false);

            return result
        }
    }

    return [
        fetchCoin, 
        isLoading, 
        fetchCoinsToList,
        isLoadingList,
        coinNotFound,
    ]
}