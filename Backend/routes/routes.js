const router =  require('express').Router();
const controllers =  require('../controllers/products_controller');
const {deleteProduct , getProduct , getUserProducts , getAllProducts , postProduct ,updateProduct} = controllers;
const multer = require('multer');
const uuid = require('uuid');
const auth =  require('../mddleware/auth_cart');
const {verifyToken} = auth;

const storage = multer.diskStorage({
    destination : function (req , file , cb){
        cb(null , './uploads/')
    }, 

    filename :  function (req , file , cb){
        cb(null , uuid.v4() + file.originalname);
    } 
});

const upload = multer({storage : storage})



router.get('/' ,getAllProducts);

router.get('/getUserProducts' , verifyToken  ,getUserProducts);

router.get('/:id' ,getProduct)

router.post('/',  upload.single('productimage') , postProduct)

router.put('/:id' , updateProduct)

router.delete('/:id' ,deleteProduct)


module.exports = router;