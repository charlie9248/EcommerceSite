const mongoose =  require('mongoose');


const productModel =  new mongoose.Schema({
    image : {type : String , required : true},
    userId : {type : String , required : true},
    name  : {type : String , required : true},
    type  : {type : String , required : true},
    price : {type : Number , required : true},
    model :  {type : String , required : true},
    make : {type : String , required : true}
});

module.exports = mongoose.model('productModel' , productModel );

