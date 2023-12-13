const express = require('express');

const router = express.Router(); //{{caseSensitive: true}}

router.get('/hello', (req,res) => {
  res.send("Hello World! from adminApp => admin-route");
})

router.get('/load', (req,res) => {
  res.send("New module loaded using Routes");
})

module.exports = router;