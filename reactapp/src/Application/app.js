import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// BrowserRouter -> will be used as Router, Routes to encapsulate route, Route to create one entry, Navigate to create hyperlink 
import "./app.css";
import HeaderComponent from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import NotFound from "./Common/NotFoundComponent";
import Home from "./Common/HomeComponent";
import About from "./Common/AboutComponent";

// from AppComponent
// import UserComponent from "./AppComponent/User/UserComponent.jsx";
import User from "./AppComponent/User/UserContainer";
import ProductComponent from "./AppComponent/Product/ProductComponent";

import UserHook from "./AppComponent/User/UserHookComponent";
import CartComponent from "./AppComponent/Cart/CartComponent";
import CheckoutComponent from "./AppComponent/Checkout/CheckoutComponent";
import CouponComponent from "./AppComponent/Coupon/CouponComponent";
import RecentOrdersComponent from "./AppComponent/RecentOrders/RecentOrdersComponent";
import CancelledOrdersComponent from "./AppComponent/RecentOrders/CancelledOrdersComponent";
import ReviewComponent from "./AppComponent/Review/ReviewComponent";
import NotificationComponent from "./AppComponent/Notification/NotificationComponent";

// import Student from "./AppComponent/Student/StudentContainer";
// import ProductComponentPractice from "./AppComponent/Product/ProductComponentPractice";
// import CartComponentPractice from "./AppComponent/Cart/CartComponentPractice";
// class component
export default class ApplicationComponent extends Component {
  // props - is used to pass information from parent to child component
  constructor(props) { // 
    super(props); // this is used to push back updated state in parent components

    // state is tightly coupled with react renderer and reads the change to recreate virtual DOM
    this.state = {
      name: "Name 1",
      header : "10,001+ employees · UI Specialist"
    }
  }

  // get data from child component using callback function
  getChildData = (data) => {
    // alert(data);
    this.setState({
      name: data
    })
  }

  // this method returns virtual DOM every change of state using this.setState
  render() { 
    return (
      <>
        <Router>
          <HeaderComponent header={this.state.header} name={this.state.name} getChildData={this.getChildData} />
          <Routes>
            <Route path="/home" element={<Home userName={"Name 1"} />} />
            <Route path="/product" element={<ProductComponent />} />
            {/* <Route path="/user" element={<User />} /> */}
            <Route path="/hook" element={<UserHook/>} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<CartComponent/>} />
            <Route path="/checkout" element={<CheckoutComponent />} />
            <Route path="/coupon" element={<CouponComponent />} />
            <Route path="/orders" element={<RecentOrdersComponent />} />
            <Route path="/cancelled-orders" element={<CancelledOrdersComponent />} />
            <Route path="/reviews" element={<ReviewComponent />} />
            <Route path="/notifications" element={<NotificationComponent />} />
            {/* <Route path="/student" element={<Student  />} /> */}
            {/* <Route path="/product-practice" element={<ProductComponentPractice />} /> */}
            {/* <Route path="/cart" element={<CartComponentPractice />} /> */}
          </Routes>
        </Router>
        <Footer />
      </>
    )
  }
}
