import * as ActionTypes from "../actionTypes";
import axios from "axios";

const reviewsUrl = `http://localhost:9000/reviews`;

export const AddItemReviewsToStore = (reviews) => ({
  type: ActionTypes.GET_ITEM_REVIEWS,
  payload: reviews
})

export const saveReview = (review)=>{
  console.log("review ", review);

  return function (dispatch) {
    axios.post(`${reviewsUrl}/api/saveReview`,
      review
    )
    .then((res)=>{
      let reviewResponse = res.data;
      console.log("Review save response ", reviewResponse);
    })
    .catch((err)=>{
      console.log("Error While Saving Review", err)
    })
  }
};

export const getReviews = (productId)=>{
  console.log("from fetch reviews action", productId)

  return function (dispatch) {
    axios.get(`${reviewsUrl}/api/getReviews?item=${productId}`)
    .then((reviews)=>{
      console.log("get reviews response ", reviews);
      dispatch(AddItemReviewsToStore(reviews.data))
      debugger;
    })
    .catch((err)=>{
      console.log("Error While Fetching Reviews", err)
    })
  }
};

