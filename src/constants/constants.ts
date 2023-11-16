import React from "react";
import { userDataConstType, userCoinListConstType, allCoinListConstType } from "../type/typeStore/typesConstants";

export const userDataConst: userDataConstType = {
    ADD_USER_DATA: 'ADD_USER_DATA',
    ADD_USER: 'ADD_USER',
}

export const userCoinListConst: userCoinListConstType = {
    ADD_COIN: 'ADD_COIN',
    DELETE_COIN: 'DELETE_COIN',
}

export const allCoinListConst: allCoinListConstType = {
    GET_COINS_LIST: 'GET_COINS_LIST'
}