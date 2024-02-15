let express = require("express");
let RecentOrdersRoute = express.Router();
const CancelledOrdersDataModel = require("../DataModels/cancelledOrdersDataModel");

RecentOrdersRoute.post("/api/saveCancelledOrder", (req, res) => {

  let cancelledOrder = new CancelledOrdersDataModel(req.body);
  cancelledOrder.save()
  .then((data) => {
    res.json(data);
  }).catch((err) => {
    res.send("An error occured in saving order" + err);
  })

})

RecentOrdersRoute.get("/api/getOrders", (req,res) => {
  debugger;
  console.log("from recent orders route req: " + req)
  RecentOrdersDataModel.find({ userId: req.query.userId })
  .then((orders) => {
    res.send(orders);
  })
  .catch((err) => {
    console.log(err);
    res.send("Error in getting recent orders");
  })
})

RecentOrdersRoute.delete("/api/cancelOrder", (req,res) => {
  
  RecentOrdersDataModel.deleteOne({ _id: req.query.orderId })
  .then((data) => {
    res.send(`Order Id: ${req.query.orderId} has been deleted`);
  })
  .catch((err) => {
    console.log(err);
    res.send("Error in getting recent orders");
  })
})

module.exports = RecentOrdersRoute;