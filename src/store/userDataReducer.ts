import { userDataConst } from '../constants/constants';
import { UserDataActionType, UserDataType } from '../type/typeStore/typesStore';

const defaultState: UserDataType = {
    valueName: '',
    valuePassword: '',
    valueRepeatPassword: '',
    valueMail: '',
    valuePhone: '',
}

export const userDataReducer = (state = defaultState, action: UserDataActionType) => {
    switch (action.type){
        case userDataConst.ADD_USER_DATA:
            return {...state, userData: [...state.userData, action.userData]}
        default:
            return state
    }
}