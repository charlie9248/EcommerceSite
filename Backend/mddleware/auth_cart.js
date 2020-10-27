const jwt =  require('jsonwebtoken');

module.exports.verifyToken = (req , res , next) => {
    let token;
    if('authorization' in req.headers){
        token = req.headers['authorization'].split(' ')[1];
    }

    if(!token){
        res.status(403).json({message : "no token"});
    }
    else{
        console.log(token);
        jwt.verify(token, process.env.JWT_KWY , (err , user) =>{
            if(err){
                return res.status(404).json({message : err});
            } 

            console.log(user);
            req.userId = user.id;
            next();
        })
    }
}