import {actionType} from '../constants/constants'

export const authReducer = (state = { loading : true}, action) => {
    switch(action.type) {
        case actionType.LOADING_DATA :
            return {  loading : true,  error: false};
        case actionType.SIGN_UP :
            return {  loading : false,  authData: action.data};
        case actionType.LOG_IN :
            return { loading : false , authData: action.data};
        case actionType.OTP_VERIFY: 
            return { loading : false , authData : action.data}
        case actionType.FORGOT_PASSWORD:
            return { loading : false , ...action.data}
        case actionType.FORGOT_PASS_OTP:
            return { loading : false , ...action.data}
        case actionType.FORGOT_CHANGE_PASS:
            return { loading : false,...action.data}
        default:
            return {...state};
    }
}

export const otpVerifyReducer = (state = { loading : true}, action) => {
    switch(action.type) {
        case actionType.OTP_VERIFY: 
            return { loading : false , authData : action.data}
        default:
            return {...state};
    }
}


export const useReferralReducer = (state = { loading : true}, action) => {
    switch(action.type) {
        case actionType.LOAD_USE_REFERRAL :
            return {  loading : true,  error: false};
        case actionType.USE_REFERRAL :
            return {  loading : false,  data: action.payload};
        case actionType.ERROR :
            return {error: true, loading: false, data : action.payload}
        default:
            return {...state};
    }
}
