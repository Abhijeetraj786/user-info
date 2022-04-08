import axios from "axios";
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../Constants/UserConstants";
export function listUsers(){
    return async(dispatch)=>{
        dispatch({
            type: USER_LIST_REQUEST,
          });
        try{
            const data1=await axios.get("https://reqres.in/api/users?page=1");
            const data2=await axios.get("https://reqres.in/api/users?page=2");
            const users=[...data1.data.data,...data2.data.data];
            dispatch({
                type: USER_LIST_SUCCESS,
                payload:users
            });
        }catch(error){
            dispatch({
                type: USER_LIST_FAIL,
                payload:error.message
            });
        }  
    }
}

export function userDetails(userId){
    return async(dispatch)=>{
        dispatch({
            type: USER_DETAILS_REQUEST,
          });
        try{
            const {data} = await axios.get(`https://reqres.in/api/users/${userId}`);
            dispatch({
                type: USER_DETAILS_SUCCESS,
                payload:data.data
            });
        }catch(error){
            dispatch({
                type: USER_DETAILS_FAIL,
                payload:error.message
            });
        }  
    }
}