// console.log("Shopping Cart Application - Build on React - will be loadeed through this file");
// alert("Index js file loaded");

import React from "react";
import * as ReactDOM from "react-dom/client";

import ApplicationComponent from "./Application/app";

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrapping react application in root element of index.html
root.render( //this creates the virtual dom (copy of actual dom in js object format)
    <ApplicationComponent/>
    // main component where entire application will be loaded
)