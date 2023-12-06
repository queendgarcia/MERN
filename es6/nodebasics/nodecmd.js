//we have 99000+ package in node js which we use for various tasks
//console.log("This is going to log information we want!!!")

const { log } = require("console") //console module to print/log data in terminal
log("This is through module import (named import) !!!")

log(__dirname) //returns fullpath of directory in which file is present
log(__filename) //returns fullpath + filename of directory in which file is present

// const os = require("os")
// const path = require('path') //will be helpful to rectify the correct path to file or directory
// const util = require('util')
// const v8 = require("v8")//gives access to V8 engine of node
// const http = require("http")

// os-related info

const os = require("os")

// log(os.userInfo())
// log(os.cpus())
// const cpuCount = os.cpus().length
// log("CPU Count ", cpuCount)
// console.log(os.hostname());
// console.log(os.release());


// data - insert data
// callback with data inserted
// print -- This is node js learning basic commands

// process.stdin.on('data', data =>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
//     process.exit();
// })
// process.stdin.on('exit', data =>{
//     log("we are exiting")
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
// })

//path-related info

const path = require('path') //will be helpful to rectify the correct path to file or directory

// console.log(`The file name is - ${path.basename(__filename)}`);
// console.log(`The file name is absolute - ${path.isAbsolute(__dirname)}`);

// console.log(`The process cpu usage ${JSON.stringify(process.cpuUsage())}`);
// console.log(`The process id ${process.pid}`);
// console.log(`The process node info ${process.versions.node}`);


const util = require('util')
const v8 = require("v8")//gives access to V8 engine of node

// v8 info
// log(v8.getHeapSnapshot())
// log(v8.getHeapStatistics())

//utility module
// util.log(path.basename(__filename))
// util.log(path.basename(__dirname))
// log(util.debuglog())

process.nextTick(()=>{log("Next Tick Called!!")})



const http = require("http")

//http //get/put/post/delete/patch

//request - google.api.getdata/user/info/id
//response - html, json, etc
function GetUserInfo(uId) {
  //connect to db
  //return userInfo
}

//http.get()

// Event Emitter - on is custom event
const {EventEmitter} = require("events")
// event emitter - on is custom event
// EventEmitter.on("request","get",(req, res)=>{
//     res.send("Information to be shared with user")
// })
