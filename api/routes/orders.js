const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Orders were fetched"
    })
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: "Orders waas created"
    })
});

router.get('/:orderId', (req, res, next)=>{
    const orderId =  req.params.orderId;
        res.status(200).json({
        message: "order details",
        orderId: orderId
    })

   
}); 

router.patch('/:orderId', (req, res, next)=>{
    const orderId =  req.params.orderId;
        res.status(200).json({
        message: "Updated an order!",
         })

}); 

router.delete('/:orderId', (req, res, next)=>{
    const orderId =  req.params.orderId;
        res.status(200).json({
        message: "Deleted an order!",
         })

}); 

module.exports =  router;