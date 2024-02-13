import { allCoinListConst, userDataConst, generalAppConst } from "../constants/constants";
import { userCoinListConst } from "../constants/constants";
import { AddUserActionType, UserDataType, AddCoinActionType, CoinType, DeleteCoinActionType, AllCoinsListType, GetCoinsActionType, changeUserDataType, ChangeGeneralAppType } from "../type/typeStore/typesStore";

// работа с данными пользователя
export const addUser = (userData: UserDataType): AddUserActionType => {
    return {
        type: userDataConst.ADD_USER_DATA,
        userData: userData
    }
}

// изменить данные пользователя
export const changeUserData = (userData: changeUserDataType) => {
    return {
        type: userDataConst.CHANGE_USER_DATA,
        userData: userData
    }
}

// добавляем монеты пользывателя
export const addCoin = (coin: CoinType): AddCoinActionType => {
    return {
        type: userCoinListConst.ADD_COIN, 
        payload: coin
    }
}
// удаляем монеты пользывателя
export const deleteCoin = (coin: CoinType): DeleteCoinActionType => {
    return {
        type: userCoinListConst.DELETE_COIN, 
        payload: coin
    }
}

// получение всех монет 
export const getAllCoinsList = (allCoins: AllCoinsListType): GetCoinsActionType => {
    return {
        type: allCoinListConst.GET_COINS_LIST,
        payload: allCoins
    }
}

// дизейблим модальное окно
export const changeDisableModal = (isDisableModal: boolean): ChangeGeneralAppType => {
    return {
        type: generalAppConst.CHANGE_DISABLE_MODAL,
        generalApp: isDisableModal
    }
}