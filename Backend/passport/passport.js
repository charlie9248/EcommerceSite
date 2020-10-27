const passport =  require('passport');
const localStrategy =  require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../model/user');




passport.use(new localStrategy({usernameField : 'email'}, (username , password, done)=>{
    User.findOne({email : username}).then(user=>{
        if(!user){
            return done(null , false , {msg : 'user doest not exist'});
        }

        bcrypt.compare(password ,user.password , (err ,isUser)=>{
            if(err) return err.message;

            if(isUser){
                return done(null , user);
            }
            else{
                return done(null , false ,{msg : 'auth failed'});
            }
        })

    }).catch(err=>{
        return {msg : err.message}
    })
}))



