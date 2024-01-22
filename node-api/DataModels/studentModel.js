let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;

//creates db with name mernstack17 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack17"); 

let studentSchema = new schemaObj({
  userName: { type: String, required: true},
  password: { type: String, required: true},
  street: String,
  mobile: String,
  session: String
})

let UserModel = mongooseObj.model("student", studentSchema);

module.exports = UserModel;