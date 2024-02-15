let express = require("express");
let ReviewItemRouter = express.Router({});

const ItemReviewDataModel = require("../DataModels/itemReviewDataModel");

ReviewItemRouter.post('/api/saveReview',(req, res)=>{
  console.log("review data ", req.body);

  let reviewItem = new ItemReviewDataModel(req.body); 

  reviewItem.save()
  .then((review)=>{       
    res.send(review); 
  })
  .catch((err)=>{
    console.log(err);
    res.send("Error in Saving Review");
  })
})

ReviewItemRouter.get('/api/getReviews',(req, res)=>{
  
  ItemReviewDataModel.find({ itemId : req.query.item })
  .then((reviews)=>{ 
    res.send(reviews);
  })
  .catch((err)=>{
    console.log(err)
    res.send("Error in Getting Item Reviews");
  })
})


module.exports = ReviewItemRouter;