import { userDataConst } from '../constants/constants';
import { UserDataActionType, StateUserDataType } from '../type/typeStore/typesStore';
import user from '../images/user/user.png';

const defaultState: StateUserDataType = {
        userData: {
            userName: 'Ivan Petrov',
            userPassword: '',
            userRepeatPassword: '',
            userMail: '',
            userPhone: '',
            userPhoto: user,
        }
    }


export const userDataReducer = (state = defaultState, action: UserDataActionType) => {
    switch (action.type){
        case userDataConst.ADD_USER_DATA:
            // console.log(action.userData);
            return {...state, userData: action.userData}
        default:
            return state
    }
}