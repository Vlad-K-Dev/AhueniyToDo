 const mongoose = require('mongoose');
 require('dotenv').config();

 mongoose
    .connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
    .catch(e => {
        console.log('Монгуст мозга ебет!', e.message)
    })

 const db = mongoose.connection;
 
 module.exports = db;