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