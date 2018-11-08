const express = require('express');
const productRouter = require('../products/productRouter')
const configureMiddleware = require('../config/middleware.js');

const server = express();
configureMiddleware(server)
//server.use(gatekeeper) this would be global

// function gatekeeper(req,res,next){
//     if(req.query.password ==='mellon'){
//         console.log('welcome travelers')
//         next();
//     } else 
//     {
//         res.send('you shall not pass!');
//     }
// }

// server.get('/',gatekeeper,(req,res)=>{
//     res.status(200).json({api:'running'})
// })


server.use('/api/products',productRouter)


module.exports = server;