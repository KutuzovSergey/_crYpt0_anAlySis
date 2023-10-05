import actionConst from "../actionTypes/actionTypes";


export const addUser = (userData) => {
    return {
        type: actionConst.ADD_USER_DATA,
        userData: userData
    }
}


