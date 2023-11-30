// callbacks and callbacks and callbacks - becomes full of callback function
// when multiple callbacks fail it ends up in a callback hell situation
//signinuser

// function Authentication(userInfo) {} //Login SignUp, create userSession
// function Authorization(userInfo, sessionId) {} // Permissions to access like admin/normal user
// function Navigation(userInfo, permissions) {} // what all pages user can navigate, returns first page

// function SignInSignupUser(authCallback, authorizationCallBk, navigationCallBk) {
//     let session = authCallback(username, password) // Authentication - get valid user session

//     if(session == valid){
//         let navigations = authorizationCallBk(userInfo, session)
//         if (navigations == "good navs") 
//             sentToSuggestedScreen(navigations)
//     }
//     else{
//         SignInSignupUser(authCallback, authorizationCallBk, navigationCallBk)
//     }
// }

// SignInSignupUser(Authentication, Authorization, Navigation)


let myPromise = new Promise((resolve, reject)=>{

  // let authResult = AuthenticationCall(userName, passWord)

  // if (authResult.success) {
  //     resolve(authResult.data)
  // } else {
  //     reject(authResult.error)
  // } 

  setTimeout(() => {
      resolve({
          "Call Name" : "Authentication",
          "Status" : "Successful",
          "Data" : "UserSession"
      })
  }, 3000);

  setTimeout(() => {
      reject({
          "Call Name" : "Authentication",
          "Status" : "Failed",
          "Data" : "Error List"
      })
  }, 2100);
})


console.log(myPromise)

myPromise.then((data, err)=>{ // in case when call is successfull
  console.log(data)
  console.log(err)
}).catch((err)=>console.log(err)) // in case when call is failed


console.log(myPromise)

console.log("Promise Completed!!!");



// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing