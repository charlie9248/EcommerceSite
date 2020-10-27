const User = require('../model/user');
const bcrypt =  require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports.register = (req, res, next) =>{
    bcrypt.hash(req.body.password , 10 ,(err ,hash) =>{
        if(err) return res.status(404).json(err.message)
        const user = new User({
            email : req.body.email,
            password : hash
        });
        user.save().then(response =>{
            res.status(200).json({response, message : "user successfully registerd"});
        }).catch(err=>{
            res.status(404).json({msg: 'user registration failed'});
        });
    });
}


module.exports.login = (req, res, next) =>{
    passport.authenticate('local' , (err ,user , info)=>{
        if(err) return res.status(404).json(err);

        if(user){
            const token = jwt.sign({email : user.email , id : user._id} , process.env.JWT_KWY , {expiresIn : '1h'});
            console.log(token);
            res.status(200).json({user : user , token : token });
        }else{
            res.status(404).json(info);
        }
    })(req ,res)
}


module.exports.logout = (req, res, next) =>{
    res.send(`logout`);
    
}


module.exports.isLoggedIn = (req , res, next) =>{
    req.isAuthenticated() ? next() : res.status(401).send({message: 'You must be LoggedIn'});
}