//we will define actions to be used by action creator and dispatchers to dispatch to store
import * as ActionTypes from "../actionTypes";

//call back function to define type and payload to be used in reducer
export const AddUserToStore = (newUser)=>{
    return {
        type : ActionTypes.AddUserToStore,
        payload : newUser
    }
}