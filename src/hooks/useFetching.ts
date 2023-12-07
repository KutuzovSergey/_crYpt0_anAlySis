import { useState } from "react";
import { UseFetchingCallbackType } from "../type/typeHooks/typesUseCurrences";
import { CallbackType } from "../type/typeHooks/typesUseFetching";

export const useFetching = (callback: CallbackType) =>{
    const [isLoading, getIsLoading] = useState(false);

    const fetching = async (params: string[]) =>{
        getIsLoading(true);
        let result = await callback(params);
        getIsLoading(false);
        // console.log(params);
        return result
    }
    return [fetching, isLoading] as const
}