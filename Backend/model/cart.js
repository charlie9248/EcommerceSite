const mongoose =  require('mongoose');


const cartModel =  new mongoose.Schema({
   
    userId : {type : String , required : true},
    image : {type : String , required : true},
    name  : {type : String , required : true},
    type  : {type : String , required : true},
    price : {type : Number , required : true},
    model :  {type : String , required : true},
    make : {type : String , required : true}
});

module.exports = mongoose.model('cartModel' , cartModel );

