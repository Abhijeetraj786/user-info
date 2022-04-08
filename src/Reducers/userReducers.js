import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../Constants/UserConstants";

export function userListReducer(state={loading:true,users:[]},action){
    switch (action.type) {
        case USER_LIST_REQUEST:
            return {loading:true};
        case USER_LIST_SUCCESS:
            return {loading:false,users:action.payload};
        case USER_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }

}

export function userDetailsReducer(state={user:{}},action){
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {loading:true};
        case USER_DETAILS_SUCCESS:
            return {loading:false,success:true,user:action.payload};
        case USER_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        case USER_DETAILS_RESET:
            return {success:false,user:{}}
        default:
            return state;
    }

}