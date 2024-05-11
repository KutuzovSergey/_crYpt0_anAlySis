import { generalAppConst } from '../constants/constants';
import { GeneralAppDataType, ChangeGeneralAppType } from '../type/typeStore/typesStore';

const defaultState: GeneralAppDataType = {
        isDisableModal: false,
        menuAdaptive: false,
        modalLogin: false,
        modalRegistr: false,
        errorPages: false,
        isAuth: false,
        videoPlayback: true,
    }


export const generalAppData = (state = defaultState, action: ChangeGeneralAppType) => {
    switch (action.type){
        case generalAppConst.CHANGE_IS_DISABLE_MODAL:
            return { ...state, isDisableModal: action.generalApp }
        case generalAppConst.CHANGE_MENU_ADAPTIVE:
            return { ...state, menuAdaptive: action.generalApp }
        case generalAppConst.CHANGE_MODAL_LOGIN:
            return { ...state, modalLogin: action.generalApp }
        case generalAppConst.CHANGE_MODAL_REGISTR:
            return { ...state, modalRegistr: action.generalApp }
        case generalAppConst.CHANGE_ERROR_PAGES:
            return { ...state, errorPages: action.generalApp }
        case generalAppConst.CHANGE_IS_AUTH:
            return { ...state, isAuth: action.generalApp }
        case generalAppConst.CHANGE_VIDEO_PLAYBACK:
            return { ...state, videoPlayback: action.generalApp}
        default:
            return state
    }
}