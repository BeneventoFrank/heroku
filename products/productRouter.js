const express = require('express');
const router = express.Router();

//middleware

//endpoints

router.get('/',(req,res)=>{
    res.send('GET /products');
})

router.get('/:id',(req,res)=>{
    res.send('GET /api/products/id')
})

module.exports = router;