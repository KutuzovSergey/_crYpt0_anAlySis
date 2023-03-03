import { useState } from "react";
import { getListOnPage } from "../AP/getCoins";

export const useFetching = (callback) =>{
    const [isLoading, getIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (params) =>{
        getIsLoading(true);
        let result = await getListOnPage(params);
        getIsLoading(false);
        return result
        // try {
        //     getIsLoading(true);
        //     console.log(await getListOnPage(params));
        //     console.log(await callback(params));
        //     return await getListOnPage(params);
        // } catch (e) {
        //     setError(e.message);
        // } finally {
        //     getIsLoading(false);
        // }
    }
    return [fetching, isLoading]
}