import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCancelledOrders } from '../../../State/CancelledOrders/cancelledOrdersAction'
import OrderComponent from './OrderComponent';


const CancelledOrdersComponent = () => {
  let cancelledOrders = useSelector((state)=>state.CancelledOrdersReducer);
  debugger;
  let loggedInUser = useSelector((state) => state.UserReducer.User)
  let cartList = useSelector((state)=>state.CartReducer)

  let dispatchAction = useDispatch()

  useEffect(()=>{
    dispatchAction(fetchCancelledOrders(loggedInUser._id))
    console.log(cancelledOrders);
  }, [])

  return (
    <>
    {
      cancelledOrders && cancelledOrders.length >= 1
      ?
      <>
        <h2 className='ml-4'>Cancelled Orders</h2>
        <table className='m-4'>
          <thead>
            <tr>
              <th>Order No.</th>
              <th>No. of Items</th>
              <th>Date of Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cancelledOrders.map( order => {
                return <OrderComponent forCancelledOrders={true} order={order} />
              })
            } 
          </tbody>
        </table>
      </>
      :
      <h2 className='ml-4'>No Cancelled Orders</h2>
    }
    </>
  )
}

export default CancelledOrdersComponent