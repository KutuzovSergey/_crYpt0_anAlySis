import React from "react";
import CurrencesList from "../components/CurrencesList";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoin } from "../store/userCoinListReducer";
import { useFetching } from "../hooks/useFetching";
import { getListOnPage } from "../AP/getCoins";

import '../styles/UserAccount.scss';


const UserAccount = () => {
    const dispatch = useDispatch();
    const userCoinList = useSelector(state => state.userCoinList.coinsList);
    
    const removeCurrences = (currency) =>{
        dispatch(deleteCoin())
    }

    return (
        <div>
            <div>
                <div>
                    <span>Выбраные монеты</span>
                </div>
                <CurrencesList
                    currences={userCoinList}
                    listLoading={false}
                    remove={removeCurrences}
                     />
            </div>
        </div>
    )
}

export default UserAccount;