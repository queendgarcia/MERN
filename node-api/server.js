console.log("Creating API using express server")

const express = require('express') //importing express package and use top level express method
const app = express() //using express function we initialize express application

const cors = require("cors");

const adminApp = express() //created to load the request for admin/backend work
const adminRoutes = require("./router/admin-route")

const userApp = express() //created to load the request for user/backend work
const userRoutes = require("./router/user-route")

const studentApp = express();
const studentRoutes = require("./router/student-route");


const productApp = express() //created to load the request for admin/backend work
const productRoutes = require("./router/product-route")

const cartApp = express() 
const cartRoutes = require("./router/cart-route");

const recentOrdersApp = express();
const recentOrdersRoutes = require("./router/recent-orders-route");

const itemReviewsApp = express();
const itemReviewsRoutes = require("./router/item-review-route");

const productAppPractice = express();
const productRoutesPractice = require("./router/product-route-practice");
const cartAppPractice = express() 
const cartRoutesPractice = require("./router/cart-route-practice")

app.use(cors()); // enabling cross-origin resource sharing at root level

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert.js

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

app.use('/admin', adminApp)
adminApp.use('/',adminRoutes)

app.use('/user', userApp) //http://localhost:9000/user/api/signinup
userApp.use('/',userRoutes)

app.use('/student', studentApp);
studentApp.use('/', studentRoutes)

app.use('/productpractice', productAppPractice);
productAppPractice.use('/', productRoutesPractice)

app.use('/product', productApp)
productApp.use('/',productRoutes)

app.use('/cartpractice', cartAppPractice)
cartAppPractice.use('/',cartRoutesPractice)

app.use('/cart', cartApp)
cartApp.use('/',cartRoutes)

app.use('/orders', recentOrdersApp)
recentOrdersApp.use('/', recentOrdersRoutes)

app.use('/reviews', itemReviewsApp)
itemReviewsApp.use('/', itemReviewsRoutes)

app.listen(9000)

console.log("API is running at http://localhost:9000")