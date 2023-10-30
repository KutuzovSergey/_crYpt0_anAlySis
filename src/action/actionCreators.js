import { userDataConst } from "../constants/constants";


export const addUser = (userData) => {
    return {
        type: userDataConst.ADD_USER_DATA,
        userData: userData
    }
}