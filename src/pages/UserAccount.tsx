import React from "react";
import UserCard from "../components/UserCard";
import CurrencesList from "../components/CurrencesList";
import TitleForPage from "../components/UI/TitleForPage/TitleForPage";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoin } from "../store/userCoinListReducer";
import { RootState } from "../store";

import '../styles/UserAccount.scss';

// type ArrUserCoinList = [] | {[key: string]: string}[];

const UserAccount:React.FC = () => {
    const dispatch = useDispatch();
    const userCoinList:any = useSelector((state: RootState) => state.userCoinList);
    // console.log(userCoinList);
    
    const removeCurrences = (currency: boolean) =>{
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