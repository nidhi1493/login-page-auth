import { DATA_LOAD, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/action-type";

const initialState = {
    userDetails: {},
    auth: {}
}
function rootReducer(state = initialState, action) {

    switch (action.type) {
        case DATA_LOAD:
            return Object.assign({}, state, { userDetails: action.payload });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, { auth: action.payload });
        case LOGIN_FAILURE:
            return Object.assign({}, state, { auth: action.payload });
        default:
            return state;
    }

}


export default rootReducer;