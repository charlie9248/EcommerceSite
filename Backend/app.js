const express  = require('express');
const app = express();
const PORT = 8080;
const passport =  require('passport');
const cors= require('cors');
require('./database/dba');
require('./passport/passport');
require('dotenv/config');


passport.use(passport.initialize())
app.use(cors())
app.use('/uploads' , express.static('uploads'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());



app.use('/product' , require('./routes/routes'));
app.use('/cart' , require('./routes/cart'));
app.use('/user' , require('./routes/user'));

app.listen(PORT , ()=> console.log(`server listening  on ${PORT}`))