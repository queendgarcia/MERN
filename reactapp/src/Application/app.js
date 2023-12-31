import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// BrowserRouter -> will be used as Router, Routes to encapsulate route, Route to create one entry, Navigate to create hyperlink 
import "./app.css";
import HeaderComponent from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import NotFound from "./Common/NotFoundComponent";
import Home from "./Common/HomeComponent";
import About from "./Common/AboutComponent";

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
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </>
    )
  }
}
