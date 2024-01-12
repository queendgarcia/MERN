// This data model will allow us to do mapping with mongoDB using mongoose
// MongoDB - non-relational, document-oriented, non-schema DB
// non-relational database --> collections instead of tables
// under collections --> free-flow objects - can add a field/property to a specific object without adding the same field to other existing objects as they are not tied to a column (table)
// objects inside collections do not necessarily need to have same structure - difference in number of fields is possible

// create a connection using MongoDB client

// mongoose --> schema-based client used for Data Modelling

//use mongoose to make connection to mongodb
//get schema object created and also develop data model to be used in api
//set validations and data types in schema
//although mongodb is schema less but with mongoose we can create schema to start with
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack17 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack17"); 

let userSchema = new schemaObj({
  // _id --> can be explicitly declared - if not, it will automatically be provided
  userName : {type: String, required : true},
  password: {type:String, required : true},
  street: String,
  mobile: Number
},
{
  versionKey: false //false - set to false then it wont create in mongodb
})

let UserModel = mongooseObj.model("user", userSchema); 
// user --> collection name, pluralised by mongodb

module.exports = UserModel; 
// exported model to have access to all functions preent in mongoose for select/insert/update