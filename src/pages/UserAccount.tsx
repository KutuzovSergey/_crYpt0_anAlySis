import React from "react";
import UserCard from "../components/UserCard";
import CurrencesList from "../components/CurrencesList";
import TitleForPage from "../components/UI/TitleForPage/TitleForPage";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoin } from "../store/userCoinListReducer";
import { RootState } from "../store";

import '../styles/UserAccount.scss';

const UserAccount:React.FC = () => {
    const dispatch = useDispatch();
    const userCoinList:any = useSelector((state: RootState) => state.userCoinList);
    
    const removeCurrences = (currency: {[key: string]: string}) =>{
        dispatch(deleteCoin(currency));
    }

    return (
        <div className="account">
            <div className="account__wrapper">
                <UserCard/>
                <div className="account-block">
                    <TitleForPage>Выбранные монеты</TitleForPage>
                    <CurrencesList
                        currences={userCoinList.coinsList}
                        // listLoading={false}
                        remove={removeCurrences}
                        textInfo={''}
                        />
                </div>
            </div>
        </div>
    )
}

export default UserAccount;