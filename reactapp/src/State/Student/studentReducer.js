const initial_state = {
  Student: {
    userName: "test",
    password: "",
    street: "A",
    mobile: "0",
    session: ""
  }
}

let StudentReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "ADD_STUDENT" :
      return {...state, Student: action.payload}
    default:
      return state
  }
}

export default StudentReducer;