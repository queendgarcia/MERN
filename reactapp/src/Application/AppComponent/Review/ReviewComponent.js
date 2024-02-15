import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from 'react-bootstrap';

let ReviewComponent = ()=>{

  let reviews = useSelector((state) => state.ItemReviewsReducer)
  let dispatchAction = useDispatch();

  console.log("reviews: ", reviews)
  console.log("item: " + reviews[0])
  debugger;

  return(
    <> 
      {
        reviews && reviews.length > 0 ?
        <>
        <h2 className="m-4">Reviews</h2>
        <p className="m-4">Item: {reviews[0].item.name}</p>
        { reviews.map((review)=>{
            return (
              <Card className="ml-4" style={{ width: '25rem' }}>
                <Card.Header>{review.user}</Card.Header>
                <Card.Body>
                  <p>{review.reviewText}</p>
                </Card.Body>
              </Card>
            )
          })
        }
        </>
        : <h4>No Reviews To Display</h4>
      }
    </>
  )
}

export default ReviewComponent;