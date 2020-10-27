const router =  require('express').Router();
const controllers =  require('../controllers/user');
const {login,isLoggedIn, register} = controllers;



router.post('/register',  register);

router.post('/login',  login);

router.get('/isloggedIn' , isLoggedIn);

module.exports = router;