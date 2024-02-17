import { UserDataConstType, UserCoinListConstType, AllCoinListConstType, GeneralAppConstType } from "../type/typeStore/typesConstants";

export const userDataConst: UserDataConstType = {
    ADD_USER_DATA: 'ADD_USER_DATA',
    ADD_USER: 'ADD_USER',
    CHANGE_USER_DATA: 'CHANGE_USER_DATA'
}

export const userCoinListConst: UserCoinListConstType = {
    ADD_COIN: 'ADD_COIN',
    DELETE_COIN: 'DELETE_COIN',
}

export const allCoinListConst: AllCoinListConstType = {
    GET_COINS_LIST: 'GET_COINS_LIST'
}

export const generalAppConst: GeneralAppConstType = {
    CHANGE_IS_DISABLE_MODAL: 'CHANGE_IS_DISABLE_MODAL',
    CHANGE_MENU_ADAPTIVE: 'CHANGE_MENU_ADAPTIVE',
    CHANGE_MODAL_LOGIN: 'CHANGE_MODAL_LOGIN',
    CHANGE_MODAL_REGISTR: 'CHANGE_MODAL_REGISTR',
    CHANGE_ERROR_PAGES: 'CHANGE_ERROR_PAGES',
    CHANGE_IS_AUTH: 'CHANGE_IS_AUTH'
}