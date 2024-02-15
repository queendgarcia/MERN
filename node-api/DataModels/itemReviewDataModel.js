let mongooseObj = require("mongoose");
let schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack17"); 

let itemReviewSchema = new schemaObj({
  itemId: { type: String, required:true },
  item: { type: Object, required:true },
  user: { type: String, required:true },
  reviewText: { type: String, required: true},
  dateTime: { type : Date, default: Date.now },
},
{
  versionKey: false 
});

let ItemReviewDataModel = mongooseObj.model("review", itemReviewSchema);
module.exports = ItemReviewDataModel;