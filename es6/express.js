// Service Oriented Architecture (SOA) - Divided in two parts

//1. BackEnd => Which we build using express
// Web Services (Restful API) => [Specifications :  http/https, Post/Get/GetById/Put/Patch/Delete (http verbs-CRUD) ]
// CRUD - Operations
// C-  Create - POST
// R-  Read - Get/GetById => GetSITUsers => UserObject in query param and Save it
// U-  Update - Put/Patch => update name in user object (name,id,address,age,dob,....)
    //PUT => Pass complete object that needs "name" to be updated including userid
    //PATCH => (PARTIAL UPDATE) - Pass just pass name and userid to update name instead of complete object
// D-  Delete - Delete - is to delete the record

// Backend will work with JSON data
// Expose end points (basically api names), URI - unique resource identifier

//2. FrontEnd => Which we build using react

// set up
// express - as web server to build restful apis
// we need to explicitely install express from repository 
// npm - already installed in our system when we install node
// yarn - we need to install additionally

// steps for setup or integrating backend server
// a. create or select a directory where we need to store services files
// b. initialize npm using npm init and create package.json file
// c. once npm is initialized we can start installing or uninstalling the packages from other repo
// d. we can create the server files with their dependencies in package.json

// Go to directory 
// =>  run npm init 
// => follow instructions to create package.json


// package.json is meta data or project file which contains info of every dependency/module we need 

// installation or uninstallation of modules steps
// a. npm i <package name>   {this will install package/module in dependencies object of package.json}
// b. folder with name node_modules gets created with step a success, contains all the modules that package installed needs
// c. package.lock.json (never edit/update this file manually), contains the information about all the dependencies
//      installed with step a, package and also avoid to have duplicate package getting installed in one app
// d. npm uninstall <package name> will uninstall the package we installed
// e. npm i <pkg name> -D {installs the package as devDependency} 
        // for purpose of saving space as the devDependency will not be installed in the production and will only be used for programming purposes


// to run api
// create start command - then use npm start
// for custom command we need to use - npm run <command name> (khan) or (build)

// to stop api loop
// ctrl+c (twice)


// nodemon - is used as monitoring tool to check updates in file and restarts

// devDependencies are dependencies used only in the development and not in production
// "devDependencies": {
//     "nodemon": "^3.0.2"
//   }

// npm i <pkg name> -D {installs the package as devDependency} 
    
// for purpose of saving space as the devDependency will not be installed in the production and will only be used for programming purposes

// --------- package.json vs package-lock.json -----------

// package.json --> meta data, information about the project that is being created
// package-lock.json --> more detailed information on the exact versions of dependencies

// note: whatever module is needed for the project, it must be installed specifically on that project and note rely on the inner dependency of your current dependencies (e.g., body-parser must still be installed even if it is used in express)

// ** package. json file focuses on project metadata and specifying the desired versions of dependencies
// ** package-lock. json file ensures deterministic installations by locking the exact versions of dependencies and their dependencies

// Without package.lock.json, there might be some differences in installed versions in different environments. To overcome this problem, package.lock.json is created to have the same results in every environment

// node_modules --> holds all the dependency modules that may be used in the project

// ------- EXPRESS.JS --------
// Minimalist web framework for Node.js
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications

// Features of Express JS
// 1. Allows to set up middlewares to respond to HTTP Requests
// 2. Defines a routing table which is used to perform different actions based on HTTP Method and URL
// 3. Allows dynamic rendering of HTML Pages based on passing arguments to templates

// Entities of Express JS
// express() - METHODS
// 1. Application
// 2. Request
// 3. Response
// 4. Router

