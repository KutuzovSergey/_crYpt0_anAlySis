import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  CurrencesStateType,
  ObjCoinsType,
} from "../type/typeComponents/typesMain";
import { RootState } from "../store";
import { addCoin } from "../action/actionCreators";
import { UseAddNawCoinType } from "../type/typeHooks/typesAddNewCoin";

export const useAddNawCoin = (): UseAddNawCoinType => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const dispatch = useDispatch();
  const userCoinList: CurrencesStateType = useSelector(
    (state: RootState) => state.userCoinList
  );

  const addNewCoinPersonalAccount = (coin: ObjCoinsType): void => {
    let valueOfCheck = userCoinList.coinsList.findIndex(
      (item) => item.FROMSYMBOL === coin.FROMSYMBOL
    );

    if (valueOfCheck === -1) {
      dispatch(addCoin(coin));
      setShowNotification(false);
    } else {
      setShowNotification(true);
    }
  };

  return [showNotification, setShowNotification, addNewCoinPersonalAccount]
};
