import { userDataConst } from '../constants/constants';
import { UserDataActionType, StateUserDataType, UserDataType, NewUserDataType } from '../type/typeStore/typesStore';
import user from '../images/user/user.png';

const defaultState: StateUserDataType = {
        userData: {
            userName: 'Ivan Petrov',
            userPassword: '123456',
            userRepeatPassword: '123456',
            userMail: 'IvanPetrov@gmail.ru',
            userPhone: '+79885642329',
            userPhoto: user,
        }
    }

export const userDataReducer = (state = defaultState, action: UserDataActionType) => {
    switch (action.type){
        case userDataConst.ADD_USER_DATA:
            return { userData: action.userData }
        case userDataConst.CHANGE_USER_DATA:
            const copyState: UserDataType = {...state.userData};
            let valueData: keyof NewUserDataType;
            
            for(valueData in action.userData){
                if (valueData in copyState) {
                    copyState[valueData] = action.userData[valueData]
                }
            }
            return { userData: copyState }
        default:
            return state
    }
}