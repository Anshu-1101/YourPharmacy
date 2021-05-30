import * as api from '../api/index.js';
import {actionType} from '../constants/constants.js';

export const login = (inputData) => api.logIn(inputData);
  
export const signup = (inputData) => api.signUp(inputData);

export const logout = ()=> async (dispatch) => api.logOut();


export const verifyUserAction = () => {
  return api.verifyUser();
}

// export const otpVerificationAction = ( userData , router ) => async (dispatch) => {
//   try{
//     dispatch({ type: actionType.LOADING_DATA });
//     const {data} = await api.otpVerification(userData);
//     dispatch({ type: actionType.OTP_VERIFY , data });
//   }catch (error) {
//     const err = {...error.response.data, error : true}
//     dispatch({ type : actionType.ERROR , data : err})
//   }
// }

// export const forgotPasswordAction = (userData) => async (dispatch) => {
//   try{
//     dispatch({ type: actionType.LOADING_DATA });
//     const {data} = await api.forgotPassword(userData);
//     dispatch({ type: actionType.FORGOT_PASSWORD , data });
//   }catch (error) {
//     const err = {...error.response.data, error : true}
//     dispatch({ type : actionType.ERROR , data : err})
//   }
// }

// export const forgotPasswordOtpAction = (userData) => async (dispatch) => {
//   try{
//     dispatch({ type: actionType.LOADING_DATA });
//     const {data} = await api.forgotPasswordOtp(userData);
//     dispatch({ type: actionType.FORGOT_PASS_OTP , data });
//   }catch (error) {
//     console.log(userData)
//     const err = {...error.response.data, error : true}
//     dispatch({ type : actionType.ERROR , data : err})
//   }
// }

// export const forgotChangePasswordAction = (userData) => async (dispatch) => {

//   try{
//     dispatch({ type: actionType.LOADING_DATA });
//     const {data} = await api.forgotChangePassword(userData);
//     console.log(data)
//     dispatch({ type: actionType.FORGOT_CHANGE_PASS , data });
//   }catch (error) {
//     const err = {...error.response.data, error : true}
//     dispatch({ type : actionType.ERROR , data : err})
//   }
// }

// export const logOutAction = (router)=> async (dispatch) => {
//   console.log("LOGOUT")
//   try{
//     const {data} = await api.logOut();
//     router.push('/')
//   }catch (error) {
//     console.log(error)
//   }
// }


// export const useReferralAction = (userData,router) => async (dispatch) =>{
//   console.log(userData)
//   try {
//       dispatch({ type: actionType.LOAD_USE_REFERRAL });
//       const { data } = await api.referral(userData);
//       dispatch({ type: actionType.USE_REFERRAL , payload: data});
//       if( data.verify ) router.push('/home')
//       else dispatch({ type : actionType.ERROR , payload : data, error: true})
//   }
//   catch(err){
//       console.log(err,err.response)
//       dispatch({ type : actionType.ERROR , data : err.response ? err.response.data : err})
//   }
// }

// export const verifyUserAction = () => {
//   return api.verifyUser();
// }