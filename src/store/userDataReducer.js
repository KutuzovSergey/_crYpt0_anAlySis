import { userDataConst } from '../constants/constants';

const defaultState = {
    valueName: '',
    valuePassword: '',
    valueRepeatPassword: '',
    valueMail: '',
    valuePhone: '',
}

export const userDataReducer = (state = defaultState, action) => {
    switch (action.type){
        case userDataConst.ADD_USER_DATA:
            return {...state, userData: [...state.userData, action.userData]}
        default:
            return state
    }
}