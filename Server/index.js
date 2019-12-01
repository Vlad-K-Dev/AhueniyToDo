const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const userRouter = require('./routes/user-routes');

const app = express();
const API_PORT = 3000;


db.on('error', console.error.bind(console, 'Mongo connect error'));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res) =>{
    res.send('Здрасьте, БЛЯТЬ!')
})

app.use('/api', userRouter);




app.listen(API_PORT, () => {console.log(`Ебанный порт ${API_PORT} на связи, БЛЭТ!!!`)});








