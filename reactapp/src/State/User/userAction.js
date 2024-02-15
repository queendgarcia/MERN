//we will define actions to be used by action creator and dispatchers to dispatch to store
import * as ActionTypes from "../actionTypes";
import axios from "axios";
import { getUserCart } from "../Cart/cartAction";

//call back function to define type and payload to be used in reducer
export const AddUserToStore = (newUser)=>{
	return {
		type : ActionTypes.AddUserToStore,
		payload : newUser
	}
}

export const RemoveUserFromStore = (user) => {
	return {
		type: ActionTypes.REMOVE_USER_FROM_STORE,
		payload: {
			_id: "",
			userName: "",
			password: "",
			street: "",
			mobile: 0
		}
	}
}

// server call
export const SaveUserToDB = (newUser)=>{
	return (dispatch)=>{
		axios.post("http://localhost:9000/user/api/signinup",//uri or end point of signinup api
			newUser //passing into the body,req.body
		)
		.then((savedUser)=>{
			let signedUser = savedUser.data;
			console.log(signedUser)
			dispatch(AddUserToStore(signedUser))
			dispatch(getUserCart(signedUser._id))
		})
		.catch((err)=>{
			console.log(err)
		})
	}
}