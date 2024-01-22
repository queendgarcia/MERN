let express = require('express');
let studentRoute = express.Router();
const studentModel = require("../DataModels/studentModel");

studentRoute.post("/api/login", (req, res)=>{
  let user = req.body
  console.log(user)

  studentModel.findOne({ 
    userName: req.body.userName
  }).then((existingUser) => {
      if (existingUser)  {
        console.log("sign-in is success", existingUser);
        res.send(existingUser);
      } else {
        let newUser = new studentModel(user);

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

module.exports = studentRoute;