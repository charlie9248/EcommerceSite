const mongoose  = require('mongoose');
const Cart = require('../model/cart');

module.exports.postCart = (req, res, next) =>{
    const cart = new Cart({
     
        userId : req.body.userId, 
        image : req.body.product.image,
        name : req.body.product.name,
        type : req.body.product.type,
        price : req.body.product.price,
        model : req.body.product.model,
        make : req.body.product.make
    });

    cart.save().then(response =>res.status(200).json(response)).catch(err=> console.log(err));
}


module.exports.getCarts = (req, res, next) =>{
    Cart.find().then(response =>res.status(200).json(response)).catch(err=> console.log(err));
}


module.exports.getSpecificUserCarts = (req , res , next) => {
    console.log(req.userId)
    Cart.find({userId : req.userId}).then(response =>res.status(200).json(response)).catch(err=> console.log(err));
}


module.exports.deleteCart = (req, res, next) =>{
    Cart.deleteOne({_id : req.params.id}).then(response =>res.status(200).json(response)).catch(err=> console.log(err));
}