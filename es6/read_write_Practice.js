let fs = require("fs");

//save the data in json object that are making MERN stack and MEAN stack as acronym
//write using writestream and also read and print using readtream upon finish
//expand it like - M-Mongo, E-Express, R-React and N-Node in JSON format

let stackDetails1 = {
  M : "Mongo",
  E : "Express",
  R : "React",
  N : "Node"
}

let stackDetails2 = {
  M : "Mongo",
  E : "Express",
  A : "Angular",
  N : "Node"
}


let writerStream1 = fs.createWriteStream("Test.json","utf8");
writerStream1.write(JSON.stringify([stackDetails1,stackDetails2]));
writerStream1.end();


reader = fs.createReadStream("Test.json"); 
  
reader.on("data", function (fileData) { 
    console.log(JSON.parse(fileData)); 
}); 


// Scenario 2: Stored data - Acronym, provide meaning after reading file

let stackDetailsAcr1 = {
 stack: "MERN"
}

let stackDetailsAcr2 = {
 stack:"MEAN"
}


let writerStream2 = fs.createWriteStream("Test2.json","utf8");
writerStream2.write(JSON.stringify([stackDetailsAcr1,stackDetailsAcr2]));
writerStream2.end();

fs.readFile('Test2.json','utf8',(err, fileData)=>{
  console.log(JSON.parse(fileData))
  let dataArr = JSON.parse(fileData);
  dataArr.forEach( item => {
      if (item.stack == "MERN") {
        console.log({ M : "Mongo", E : "Express", R : "React", N : "Node"})
      }
      else if(item.stack == "MEAN") {
        console.log({ M : "Mongo", E : "Express", A : "Angular", N : "Node"})
      }
  })
})