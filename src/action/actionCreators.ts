import { userDataConst } from "../constants/constants";
import { ValueUserType } from "../type/typeHooks/typesUseInput";

export const addUser = (userData: ValueUserType) => {
    return {
        type: userDataConst.ADD_USER_DATA,
        userData: userData
    }
}