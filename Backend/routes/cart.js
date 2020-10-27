const router =  require('express').Router();
const controllers =  require('../controllers/cart._controller');
const {deleteCart ,getCarts ,postCart ,getSpecificUserCarts} = controllers;
const auth =  require('../mddleware/auth_cart');
const {verifyToken} = auth;



router.get('/' , verifyToken ,getSpecificUserCarts);

router.post('/',  postCart);

router.delete('/:id' ,deleteCart)



module.exports = router;