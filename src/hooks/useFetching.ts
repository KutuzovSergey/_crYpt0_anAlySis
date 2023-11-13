import { useState } from "react";
import { UseFetchingCallbackType } from "../type/typeHooks/typesUseCurrences";

export const useFetching = (callback: UseFetchingCallbackType) =>{
    const [isLoading, getIsLoading] = useState(false);

    const fetching = async (params: any) =>{
        getIsLoading(true);
        let result = await callback(params);
        getIsLoading(false);
        return result
    }
    return [fetching, isLoading] as const
}