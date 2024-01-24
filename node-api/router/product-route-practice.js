let express = require("express");
let productRoutePractice = express.Router();
const productDataModelPractice = require("../DataModels/productDataModelPractice");

productRoutePractice.post("/api/details", (req, res)=>{
  let details = req.body
  console.log(details)

  let productData = new productDataModelPractice(details);

  productData.save().then((details) => {
    console.log("Success: Product is submitted", details);
    res.send(details);
  }).catch((err) => {
    console.log("Error: Product Submit", err);
    res.send("Error while Submitting Product Details");
  })

})


module.exports = productRoutePractice;