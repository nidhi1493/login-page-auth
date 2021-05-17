import { DATA_LOAD, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/action-type";
import  userDetails from "../constants/UserData";

export function addData(payload) {
    return { type: DATA_LOAD, payload }

};

export const validateLogin = (payload) => (dispatch, getState) => {
    //Dummy API call
    const response = dummyAPiResponse(payload);
    if (response.isLoginSuccess) {
        dispatch(addData(userDetails));
        // this.props.history.push('/showUserDetails');
        dispatch({ type: LOGIN_SUCCESS, payload: response });
    }
    return dispatch({ type: LOGIN_FAILURE, payload: response });
}

function dummyAPiResponse(payload) {
    if (payload.email === "hruday@gmail.com" && payload.password === "hruday123") {
        return {
            isLoginSuccess: true,
            email: payload.email
        }
    }
    else {
        return {
            errorMessage: "User Id and Password doesn't match",
            isLoginSuccess: false,
            email: payload.email
        }
    }
}