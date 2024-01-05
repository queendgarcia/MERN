// React
// --> a JavaScript library for building user interface (UI)
// --> V in MVC (model,view,controller)
// --> utilizes Diffing Algorithm which compares both virtual DOMs

// Virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
// Virtual DOM --> Replica of the html in a javascript format (json structure) which is stored in memory (components) - it gets generated with root.render()

// for small change, it will not re-render the whole actual DOM but will just replace the value for a particular element in the component

// we use state for changes --> this state

// the DOM represents the actual HTML structure of a web page, while the Virtual DOM is a lightweight copy of the DOM used by React to enhance performance while updating the actual DOM.

// AJAX component
// Asynchronous Javascript And XML 
// **combination of: 
// 1. A browser built-in XMLHttpRequest object (to request data from a web server)
// 2. JavaScript and HTML DOM (to display or use the data)

// AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.


// DOM --> Document Object Model

// Document Object Model. It is a programming interface that allows us to create, change, or remove elements from a website document. 

// DOM manipulation is when you use JavaScript to add, remove, and modify elements of a website. It is very common in web development

// example: let domObj = document.getElementById("htmlid") --> domObj.innerText = "UI Specialist"
// Performance tab in dev tools --> can see the performance matrix
// DOM Manipulation can slow down the performance 

// React practices DOM manipulation but in a faster approach by using a virtual DOM

// Diffing Algorithm in React JS differentiates the updated and previous DOM of the application. 

// DOM stores the components of a website in a tree structure. React uses virtual DOM which is a lightweight version of the DOM. The only difference is the ability to write the screen like the real DOM, in fact, a new virtual DOM is created after every re-render.

// Diffing short for Differences Algorithm is used to differentiate the DOM Tree for efficient updates. React utilize diffing algorithm to identify the changes in the newly created virtual dom and previous version of dom after any changes are made.

// TWO TYPES OF COMPONENTS

// 1. CLASS-BASED COMPONENT
  // inherits itself from the core class, Component, it gets all the properties from the parent - to sync with the base class
  // Re-rendering in React utilizes virtual DOM as it is compared with the actual DOM already in the UI
  // We need to create a state to take a capture the current state before changes or after changes - basically, it is used as mark or flag for changes

  // Class-based Component uses state --> this is tightly coupled with react renderer and reads the change to recreate virtual DOM

  // render() method  -- this method returns virtual DOM on every change of state using this.setState
  // Life cycle method of React.Component base class, generated virtual DOM on state change


// 2. FUNCTIONAL COMPONENT


// to share information between components --> top to bottom (parent to child) 
// props => using this, we can pass the information from parent to child component

// DEFINING ROUTES

