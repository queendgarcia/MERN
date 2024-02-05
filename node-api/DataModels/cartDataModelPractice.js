let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack17"); 

let cartSchema = new schemaObj({
  cart: [{
    _id: String,
    name: String,
    qty: Number,
    price: Number,
    rating: String,
    desc: String
  }],
  userId: String
})

let cartDataModelPractice = mongooseObj.model("cartpractice", cartSchema);

module.exports = cartDataModelPractice;