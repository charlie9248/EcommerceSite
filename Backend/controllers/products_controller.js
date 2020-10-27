const mongoose  = require('mongoose');
const Products = require('../model/product');


module.exports.postProduct = (req , res , next) =>{

    const product = new Products({
        image : req.file.path,
        userId : req.body.userId,
        name : req.body.name,
        type : req.body.type,
        price : req.body.price,
        model : req.body.model,
        make : req.body.make
    });

    console.log(product)
    product.save().then(response =>res.status(200).json({response})).catch(err=> res.json({err : err}));
}


module.exports.getProduct = (req , res , next) =>{
    Products.find({_id : req.params.id}).then(response => res.status(200).json(response)).catch(err => res.status(404).json({err}))
}


module.exports.getAllProducts = (req , res , next) =>{
    Products.find().then(response => res.status(200).json(response)).catch(err => res.status(404).json({err}));

}

module.exports.deleteProduct = (req , res , next) =>{
    Products.deleteOne({_id : req.params.id}).then(response => res.status(200).json({response})).catch(err => res.status(404).json({err}));

}

module.exports.updateProduct = (req , res , next) =>{
    const updatedProduct = {};
    for( product in req.body){
        updatedProduct[product.productfield] = product.value
    }
    Products.update({_id : req.params.id} , {$set : updatedProduct }).then(response => res.status(200).json({response})).catch(err => res.status(404).json({err}));
}


module.exports.getUserProducts = (req, res , next) => {
    Products.find({userId : req.userId}).then(response => res.status(200).json(response)).catch(err => res.status(404).json({err}))
}