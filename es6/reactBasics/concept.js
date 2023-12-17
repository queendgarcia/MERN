// React
// --> a JavaScript library for building user interface (UI)
// --> V in MVC (model,view,controller)
// --> utilizes Diffing Algorithm which compares both virtual DOMs


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