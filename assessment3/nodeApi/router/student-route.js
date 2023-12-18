const express = require('express');
const router = express.Router(); 

// Q2 
router.get('/', (req,res) => {
  res.send("Hello from /student");
})

router.get('/test', (req,res) => {
  res.send("Hello from student/test");
})

module.exports = router;