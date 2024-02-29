import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Card, ListGroup} from 'react-bootstrap'
import { removeDynamicNotificationToStore, removeStaticNotificationToStore } from '../../../State/Notifications/notificationsAction'
import { useNavigate } from 'react-router-dom'
import {Badge, Menu, MenuItem } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationComponent = () => {
  let notifications = useSelector((state) => state.NotificationsReducer)
  let dispatchAction = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const notifIconClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const closeNotification = () => {
    setAnchorEl(null);
  };


  let navigate = useNavigate();
  let notificationClick = (notif) => {
    if (notif.type == "static") {
      dispatchAction(removeStaticNotificationToStore(notif.message))
      debugger;
      switch (notif.message) {
        case "Add Products" : { navigate("/product"); break; }
        case "Modify Cart" : { navigate("/cart"); break; }
        case "Review Checkout Page" : { navigate("/checkout"); break; }
        case "Make Payment" : { navigate("/checkout"); break; }
        case "Reorder or Cancel Orders" : { navigate("/orders"); break; }
        default : navigate("/product")
      }
    }
    else dispatchAction(removeDynamicNotificationToStore(notif.message))
  }

  return (
    <div className="notification-menu">
      <button onClick={(e)=>notifIconClick(e)} >
        <Badge badgeContent={notifications.Count} max={99} sx={{ "& .MuiBadge-badge": { backgroundColor: "red"} }}>
          <NotificationsIcon  />
        </Badge>
      </button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={closeNotification}
      >
        
        {
          notifications.Static && (notifications.Static).length > 0 ? (notifications.Static).map( notification => {
            let notif = { type: "static", message: notification } 
            return (
              <MenuItem onClick={() => notificationClick(notif)}>{notification}</MenuItem>
            )
          })
          :
          <></>
        }
        {
          notifications.Dynamic && (notifications.Dynamic).length > 0 ? (notifications.Dynamic).map( notification => {
            let notif = { type: "dynamic", message: notification }
            return (
              <MenuItem onClick={() => notificationClick(notif)}>{notification}</MenuItem>
            )
          })
          :
          <></>
        }
      </Menu>
    </div>
  )
}

export default NotificationComponent