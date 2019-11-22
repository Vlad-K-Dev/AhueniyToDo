 const mongoose = require('mongoose');

 mongoose
    .connect('mongodb://localhost:27017/multiplayer', {useNewUrlParser: true})
    .catch(e => {
        console.log('Монгуст мозга ебет!', e.message)
    })

 const db = mongoose.connection;
 
 module.exports = db;