let express = require("express");
let cartRoutePractice = express.Router();
const cartDataModelPractice = require("../DataModels/cartDataModelPractice");

cartRoutePractice.post("/api/items", (req, res)=>{
  let details = req.body
  console.log(`cart-details: ${details}`)

  let cartData = new cartDataModelPractice(details);

  cartData.save().then((details) => {
    console.log("Success: Cart items submitted", details);
    res.send(details);
  }).catch((err) => {
    console.log("Error in Cart Processing", err);
    res.send("Error while saving cart items");
  })

})


module.exports = cartRoutePractice;