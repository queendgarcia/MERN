import React, {useState} from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { cancelOrder } from '../../../State/RecentOrders/recentOrdersAction';
import { emptyTheCart, addItemToCart } from '../../../State/Cart/cartAction';

import { Modal } from 'react-bootstrap';
import ReviewModal from '../Review/ReviewModal';


const OrderComponent = (props) => {

  let {order, forCancelledOrders} = props
  let orderDate = new Date(order.dateTime).toLocaleDateString()
  let processingDate = moment(orderDate).add(2, 'days');
  let orderCancellable = moment(processingDate).isSameOrAfter(new Date());
  debugger;
  let [modalShow, setModalShow] = useState(false);
  let [reviewModal, setReviewModal] = useState(false);
  let [showItems, setShowItems] = useState("d-none");
  
  let dispatchAction = useDispatch();

  let cancelOrderFnc = (order) => {
    console.log("order number to cancel: " + order);
    dispatchAction(cancelOrder(order));
  }

  let openModal =() => {
    setModalShow(true)
  }

  let closeModal = () => {
    setModalShow(false);
  }

  let saveOrderToCart = (action) => {
    debugger;
    if (action == "replace" ) {
      dispatchAction(emptyTheCart())
    }
   
    let cartList = order.cart
    cartList.forEach( item => {
      debugger;
      dispatchAction(addItemToCart(item))
    })

    closeModal();
  }

  let rowClickFnc = () => {
    if (showItems == "d-none") setShowItems("")
    else setShowItems("d-none");
  }

  let showReviewModal = () => {
    debugger;
    console.log("check reviewModal" + reviewModal)
    if (reviewModal) setReviewModal(false)
    else setReviewModal(true)
  }

  return (
   <>
     <tr onClick={rowClickFnc}>
      <td>{order._id}</td>
      <td>{order.cart.length}</td>
      <td>{orderDate}</td>
      {
        forCancelledOrders ? <td><button onClick={()=> openModal()} className="btn-success">Reorder</button></td>
        :
        <>
          {
            orderCancellable ? <td>Processing</td>
            : 
            <td>Delivered</td>
          }
          {
            orderCancellable ? 
            <td>
              <button className="btn-danger" onClick={() => cancelOrderFnc(order)}>Cancel</button>
            </td>
            : 
            <td>
              <button onClick={()=> openModal()} className="btn-success">Reorder</button>
            </td>
          }
        </>
      }
      </tr>
      <div className={ `item-info ${showItems}`}>
        <h5>Items Ordered: </h5>
        { (order.cart).map( item => {
            return (
            <>
            <tr>
              <td>Name: {item.name}</td>
              <td>Qty: {item.qty}</td>
              <td>Price: {item.price}</td>
              {
                forCancelledOrders || orderCancellable ? <></>
                : 
                <td>
                  <a href="#" onClick={() => showReviewModal()}>Review</a>
                </td>
              }
            </tr>
            <ReviewModal reviewItem={reviewModal} item={item} showReviewModal={showReviewModal} />
            </>
            )
          })
        } 
      </div>
      <Modal centered show={modalShow}>
        <Modal.Header>
          <Modal.Title>Save Items to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2">  
            <h5>Combine items in cart with this order</h5>
            <button onClick={() => saveOrderToCart("merge")}>Merge Items</button>
          </div>
          <div className="p-2">
            <h5>Replace items in cart with this order</h5>
            <button onClick={() => saveOrderToCart("replace")}>Replace Items</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setModalShow(false)}>Close</button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default OrderComponent
