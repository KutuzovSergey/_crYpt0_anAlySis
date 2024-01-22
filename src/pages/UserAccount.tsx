import React from "react";
import UserCard from "../components/UserCard";
import CurrencesList from "../components/CurrencesList";
import TitleForPage from "../components/UI/TitleForPage/TitleForPage";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoin } from "../action/actionCreators";
import { RootState } from "../store";
import { CoinType } from "../type/typeStore/typesStore";
import { CurrencesStateType } from "../type/typeComponents/typesMain";

import '../styles/UserAccount.scss';

const UserAccount:React.FC = () => {
    const dispatch = useDispatch();
    const userCoinList: CurrencesStateType = useSelector((state: RootState) => state.userCoinList);
    
    const removeCurrences = (currency: CoinType) =>{
        dispatch(deleteCoin(currency));
    }

    const isLoadingList = false;

    return (
        <div className="account">
            <div className="account__wrapper">
                <UserCard/>
                <div className="account-block">
                    <TitleForPage>Выбранные монеты</TitleForPage>
                    <CurrencesList
                        currences={userCoinList.coinsList}
                        remove={removeCurrences}
                        textInfo={''}
                        isLoadingList={isLoadingList}
                        displayingAdd={false}
                        />
                </div>
            </div>
        </div>
    )
}

export default UserAccount;