console.log("Creating API using express server")

const express = require('express');
// importing express package and use top level express method
const app = express();
// using express function, we initialize express application

// app.get, app.put, app.post, app.patch, app.delete
// app.all --> any kind of request can be served through this

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

// api using query string => localhost:3000/query?name=Name1&age=21&address=US&id=25
// to access query params --> req.query (payload)
app.get('/query', (req,res) => {
  let qs = req.query;
  // request object converts query string into JSON format
  console.log(qs);

  if (qs.id == 25) {
    res.json(qs);
  } else {
    res.send("invalid id");
  }
})

// api using route param -- with id 
// to access parameter --> req.params (url path/route param)

// localhost:3000/routeParam/25
app.get('/routeParam/:id', (req,res) => {
  let param = req.params["id"];
  if (param==25) {
    res.send("A valid parameter. Fetching user by ID");
  } else {
    res.send("Invalid route parameter ID");
  }
})


// sendFile function to redirect to a whole HTML page
app.get('/file', function (req, res) {
  res.sendFile(__dirname+"/index.html")
});

// DEFAULT or WILDCARD OPERATOR to serve request for any request/path
app.get('*', function(req,res) {
  res.send("<h1>API is not ready yet</h1>")
});

// port
app.listen(3000);

console.log("API is running at http://localhost:3000");

