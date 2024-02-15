let mongooseObj = require("mongoose");
let schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack17"); 

let RecentOrdersSchema = new schemaObj({
  userId: { type: String, required:true },
  cart: { type: Object, required:true },
  dateTime: { type : Date, default: Date.now },
},
{
  versionKey: false 
});

let RecentOrdersDataModel = mongooseObj.model("orders", RecentOrdersSchema);
module.exports = RecentOrdersDataModel;