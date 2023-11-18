import React from "react";
import { UserDataConstType, UserCoinListConstType, AllCoinListConstType } from "../type/typeStore/typesConstants";

export const userDataConst: UserDataConstType = {
    ADD_USER_DATA: 'ADD_USER_DATA',
    ADD_USER: 'ADD_USER',
}

export const userCoinListConst: UserCoinListConstType = {
    ADD_COIN: 'ADD_COIN',
    DELETE_COIN: 'DELETE_COIN',
}

export const allCoinListConst: AllCoinListConstType = {
    GET_COINS_LIST: 'GET_COINS_LIST'
}