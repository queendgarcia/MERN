
// Q1
const express = require('express');
const app = express();

// Q2 and Q3
const studentApp = express();
const studentRoutes = require("./router/student-route");

const fs = require("fs");

app.get('/', function(req,res) {
  res.send('Hello World');
});

app.use('/student', studentApp);
studentApp.use('/', studentRoutes);


// Q4
app.get('/student-details', (req,res) => {
  let queryParam = req.query;
  res.json(queryParam);
  
  // Q5
  let writerStream = fs.createWriteStream("studentInfo.json","utf8");
  writerStream.write(JSON.stringify(queryParam));
  writerStream.end();
})

//check for Q4 and Q5: localhost:3000/student-details?name=Assessment3&age=24&address=US&session=MERNStack

app.listen(3000);
console.log("API is running at http://localhost:3000");

// Q6
//6. Create a setup for webpack
// answer: reactApp

// Q7
//7. What is the purpose of babel, are most important configurations we get from webpack
// answer:  Babel is used to convert code written in es6,react,etc. into core javascript codes as browsers do not understand codes written in these syntax and will only be able to process core js codes. 
// Aside form this conversion of codes, webpack also does minification of files which focuses on making the performance better as it handles removing spaces, etc., as it bundles multiple files into 1 file only (example: bundle.js)

// Q8
//8. What is the purpose of -ReactDOM.createRoot
// answer: ReactDom.createRoot is used to create a root element in the DOM wherein the entirety of the application will be loaded in. This root element will be the entry point and will be the parent element for all the UI elements of the DOM


