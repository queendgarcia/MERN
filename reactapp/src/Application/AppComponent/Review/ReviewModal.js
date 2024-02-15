import React, {useRef, useState} from 'react'
import {Modal, Form} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveReview } from '../../../State/Reviews/itemReviewsAction';

const ReviewModal = (props) => {
  let [modalShow, setModalShow] = useState(false);
  let reviewText = useRef();  
  let user = useSelector((state) => state.UserReducer.User)

  let dispatchAction = useDispatch();

  let submitReview = () => {
    console.log("submit review")
    console.log(user.userName, reviewText.current.value);
    let requestReview = {
      item: props.item,
      itemId: props.item._id,
      user: user.userName,
      reviewText: reviewText.current.value
    }
    dispatchAction(saveReview(requestReview));
    props.showReviewModal()
  }

  return (
    <Modal centered show={props.reviewItem}>
      <Modal.Header>
        <Modal.Title>Review Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Write your review for item: {props.item.name}</Form.Label>
            <Form.Control as="textarea" rows={3} ref={reviewText} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-danger" onClick={() => props.showReviewModal()}>Cancel</button>
        <button onClick={() => submitReview()}>Submit</button>
      </Modal.Footer>
    </Modal>
  )
}

export default ReviewModal