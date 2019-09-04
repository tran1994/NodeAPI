const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/',(req,res,next)=>{
    const order ={
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(200).json({
        message: 'Orders were created',
        createdOrder: order
    });
});


router.post('/:orderID',(req,res,next)=>{
    res.status(200).json({
        message: 'Order details',
        orderID: req.params.orderID
    });
});

router.delete('/:orderID',(req,res,next)=>{
    res.status(200).json({
        message: 'Order deleted',
        orderID: req.params.orderID
    });
});




module.exports = router;