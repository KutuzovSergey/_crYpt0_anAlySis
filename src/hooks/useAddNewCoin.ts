import { useState, useLayoutEffect, useEffect } from "react";
import { findingValueInArray } from "../utils/filters";
import { useSelector } from "react-redux";
import { SearchItemType } from "../type/typeHooks/typesUseSearch";
import { useDispatch } from "react-redux";
import { CurrencesStateType, ObjCoinsType } from "../type/typeComponents/typesMain";
import { RootState } from "../store";
import { addCoin } from "../action/actionCreators";

export const useAddNawCoin = () =>{
    const [showNotification, setShowNotification] = useState(false);
    const dispatch = useDispatch();
    const userCoinList: CurrencesStateType = useSelector((state: RootState) => state.userCoinList);
    
    const addNewCoinPersonalAccount =(coin: ObjCoinsType) => {
        let valueOfCheck = userCoinList.coinsList.findIndex( (item) => item.FROMSYMBOL === coin.FROMSYMBOL);

        if(valueOfCheck === -1){
            dispatch(addCoin(coin));
            setShowNotification(false);
        } else {
            setShowNotification(true);
        }
    }

    return [
        showNotification,
        setShowNotification,
        addNewCoinPersonalAccount,
    ] as const
}