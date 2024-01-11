// create routes/APIs for user sign-in/up
let express = require("express");
let userRoute = express.Router();
const userDataModel = require("../DataModels/userDataModel");

//localhost:9000/user/api/signinup
userRoute.post("/api/signinup", (req, res)=>{
  let user = req.body //this will be sent as post request from userAction
  console.log(user)

  userDataModel.findOne({ userName: req.body.userName}).then((existingUser) => {
    if (existingUser)  {
      console.log("sign-in is success", existingUser);
      res.send(existingUser);
    } else {
      // user is not present, go for user creation (sign-up)
      
      // use schema to create new User object
      let newUser = new userDataModel(user);

      newUser.save().then((newUser) => {
        console.log("Successful Sign-up", newUser);
        res.send(newUser);
      }).catch((err1) => {
        console.log("Error signing-up", err1);
        res.send("Error while Signing Up");
      })
    }
  }).catch((err) => {
    console.log("Error: Login", err);
    res.send("Error while Logging In - Existing User");
  })

})

userRoute.get("/api/getuser", (req,res) => {
  userDataModel.find().then((allusers) => {
    res.send(allusers);
  }).catch(() => {
    res.send("Error while Fetching Users");
  })
})

module.exports = userRoute;