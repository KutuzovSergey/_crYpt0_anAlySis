import { allCoinListConst, userDataConst, generalAppConst } from "../constants/constants";
import { userCoinListConst } from "../constants/constants";
import { AddUserActionType, UserDataType, AddCoinActionType, CoinType, DeleteCoinActionType, AllCoinsListType, GetCoinsActionType, ChangeUserDataType, ChangeGeneralAppType } from "../type/typeStore/typesStore";

// работа с данными пользователя
export const addUser = (userData: UserDataType): AddUserActionType => {
    return {
        type: userDataConst.ADD_USER_DATA,
        userData: userData
    }
}

// изменить данные пользователя
export const changeUserData = (userData: ChangeUserDataType) => {
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
        type: generalAppConst.CHANGE_IS_DISABLE_MODAL,
        generalApp: isDisableModal
    }
}

// 
export const changeMenuAdaptive = (menuAdaptive: boolean): ChangeGeneralAppType => {
    return {
        type: generalAppConst.CHANGE_MENU_ADAPTIVE,
        generalApp: menuAdaptive
    }
}

// 
export const changeModalLogin = (modalLogin: boolean): ChangeGeneralAppType => {
    return {
        type: generalAppConst.CHANGE_MODAL_LOGIN,
        generalApp: modalLogin
    }
}

// 
export const changeModalRegistr = (modalRegistr: boolean): ChangeGeneralAppType => {
    return {
        type: generalAppConst.CHANGE_MODAL_REGISTR,
        generalApp: modalRegistr
    }
}

export const changeErrorPages = (errorPages: boolean): ChangeGeneralAppType => {
    return {
        type: generalAppConst.CHANGE_ERROR_PAGES,
        generalApp: errorPages
    }
}

// авторизация пользователя
export const changeIsAuth = (isAuth: boolean): ChangeGeneralAppType => {
    return {
        type: generalAppConst.CHANGE_IS_AUTH,
        generalApp: isAuth
    }
}

// режим работы видео play/pause
export const changeVideoPlayback = (playbackMode: boolean): ChangeGeneralAppType => {
    return {
        type: generalAppConst.CHANGE_VIDEO_PLAYBACK,
        generalApp: playbackMode
    }
}