const mongoose = require('mongoose');
require('dotenv/config');



mongoose.connect( process.env.DB_KEY , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).catch(err => console.log(`database not connected`));


mongoose.connection.on('connected' , ()=> console.log(`connected to data base`));


