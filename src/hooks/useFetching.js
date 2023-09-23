import { useState } from "react";

export const useFetching = (callback) =>{
    const [isLoading, getIsLoading] = useState(false);

    const fetching = async (params) =>{
        getIsLoading(true);
        let result = await callback(params);
        getIsLoading(false);
        return result
    }
    return [fetching, isLoading]
}