import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../../State/RecentOrders/recentOrdersAction';
import OrderComponent from './OrderComponent';

const RecentOrdersComponent = () => {
  let orders = useSelector((state)=>state.RecentOrdersReducer);
  debugger;
  let loggedInUser = useSelector((state) => state.UserReducer.User)

  let dispatchAction = useDispatch()
  
  useEffect(()=>{
    dispatchAction(fetchOrders(loggedInUser._id))
    console.log(orders);
  }, [])
  
  return (
    <>
    {
      orders && orders.length >= 1
      ?
      <>
        <h2 className='ml-4'>Recent Orders</h2>
        <table className='m-4'>
          <thead>
            <tr>
              <th>Order No.</th>
              <th>No. of Items</th>
              <th>Date of Order</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map( order => {
                return <OrderComponent order={order} />
              })
            } 
          </tbody>
        </table>
      </>
      :
      <h2 className='ml-4'>No Recent Orders</h2>
    }
    </>
  )
}

export default RecentOrdersComponent