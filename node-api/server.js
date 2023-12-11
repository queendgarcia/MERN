console.log("Creating API using express server")

const express = require('express');
const app = express();

app.get('/', function(req,res) {
  res.send('Hello World');
});

app.get('/info', function(req,res) {
  res.json({
    session: "MERNStack",
    topic: "Express JS",
    apiname: "Give Session Info",
    built: "Using nodemon",
    command: "npm start"
  });
});

// port
app.listen(3000);

console.log("API is running at http://localhost:3000");

