console.log("Creating API using express server")

const express = require('express');
// importing express package and use top level express method
const app = express();
// using express function, we initialize express application

// app.get, app.put, app.post, app.patch, app.delete
// app.all --> any kind of request can be served through this

// note: we can run multiple applications by delegating some requests to a specific application

const adminApp = express(); // create to load teh request for admin/backend work

const adminRoutes = require("../router/admin-route");

// -------- Middleware --------
// setting up the middleware static to handle all the static files that are needed to be served to client

// serve static files like images, css, etc. using static middleware <<search more about middleware>>

app.use('/static', express.static('public')); // localhost:3000/static/alert.js

// this will contain all the requests that is related in the admin ((moved to router folder))
// app.use('/admin', adminApp);
// adminApp.get('/hello', (req,res) => {
//   res.send("Hello World! from adminApp");
// })

// router folder is needed to group the requests
app.use('/admin', adminApp);
adminApp.use("/", adminRoutes);

app.get('/hello', function(req,res) {
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
  res.sendFile(__dirname+"/public/index.html")
});

// since js has a different path to load
// adding such files in API causes tedious task especially if there are several files; hence, middleware is used for this problem ((check notes above: --Middleware--))
app.get('/static.js', function (req, res) {
  res.sendFile(__dirname+"/public/static.js")
});

// DEFAULT or WILDCARD OPERATOR to serve request for any request/path
// app.get('*', function(req,res) {
//   res.send("<h1>API is not ready yet</h1>")
// });

// check correct codes for this
// console.log(req.rawHeaders);
// let deviceType = req.rawHeaders.indexOf("Android") >= 1 ? "Is Android" : "Desktop";
// console.log(deviceType);

// res.send("<h1>Device Type is " + deviceType + "</h1>");

// port
app.listen(3000);

console.log("API is running at http://localhost:3000");

