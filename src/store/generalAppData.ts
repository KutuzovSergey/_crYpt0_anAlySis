import { generalAppConst } from '../constants/constants';
import { GeneralAppDataType, ChangeGeneralAppType } from '../type/typeStore/typesStore';

const defaultState: GeneralAppDataType = {
        isDisableModal: false,
    }


export const generalAppData = (state = defaultState, action: ChangeGeneralAppType) => {
    switch (action.type){
        case generalAppConst.CHANGE_DISABLE_MODAL:
            return { ...state, isDisableModal: action.generalApp }
        default:
            return state
    }
}