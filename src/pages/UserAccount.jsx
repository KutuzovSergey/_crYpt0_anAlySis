import React from "react";
import CurrencesList from "../components/CurrencesList";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoin } from "../store/userCoinListReducer";

import '../styles/UserAccount.scss';


const UserAccount = () => {
    const dispatch = useDispatch();
    const userCoinList = useSelector(state => state.userCoinList);
    
    const removeCurrences = (currency) =>{
        dispatch(deleteCoin(currency))
    }

    return (
        <div className="account">
            <div className="selectedCoins">
                <div className="selectedCoins__title">
                    <span className="selectedCoins__title__text">Выбраные монеты</span>
                </div>
                <CurrencesList
                    currences={userCoinList}
                    listLoading={false}
                    remove={removeCurrences}
                    textInfo={''}
                     />
            </div>
        </div>
    )
}

export default UserAccount;