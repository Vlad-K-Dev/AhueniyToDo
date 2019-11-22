const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const userRouter = require('./routes/user-routes');


const app = express();
const API_PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'Mongo connect error'));

app.get('/',(req,res) =>{
    res.send('Здрасьте, БЛЯТЬ!')
})

app.use('/api', userRouter);

app.listen(API_PORT, () => {console.log(`Ебанный порт ${API_PORT} на связи, БЛЭТ!!!`)});




// const router = express.Router();


//Mongo connect

// const dbRoute = "mongodb://localhost:27017/multiplayer";
// mongoose.connect(dbRoute, {userNewUrlParser:true, useFindAndModify: false});

// let db = mongoose.connection; 

// db.once('open', ()=>{
//     console.log('Заебись!')
// });

// db.on('error', console.error.bind(console, 'Хуня опять!'));

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
// app.use(logger('dev'));


// router.get('/getData', (req,res) => {
//     Data.find((err, data) => {
//         if(err) {
//             console.log(err)
//             return res.json({success: false, error: err})
//         }
            
//         return res.json({success: true, error:err});
//         })
// });


// router.post('/updateData', (req,res)=>{
//     const {id, update} = req.body;
//     Data.findByIdAndUpdate(id, update,(err) => {
//         if(err) {return res.json({success: false, error: err})}
//             return res.json({success: true, error:err});
//         })
// });
//
// router.delete('/deleteData', (req, res) => {
//     const {id} = req.body;
//     Data.findByIdAndRemove(id, update,(err) => {
//         if(err) {return res.send(err)}
//         return res.json({success: true, error:err});
//     })
// });
//
// router.post('/putData', (req,res)=>{
//     let data = new Data();
//     const {id, email} = req.body;

//     if((!id && id !== 0) || !email){
//         console.log(res);
//         return res.json({
//             success:false,
//             error:'Хуйня какя-то!!!!!'
//         });
//     }
// })
//
//     const User = mongoose.model("Data", DataSchema);
//     const user = new Data({
//         id: 3,
//         name: email,
//     });
//
//     data.email = email;
//     data.id = id;
//     data.save((err) => {
//         if(err){
//             return res.json({success: false, error: err})
//         }
//         return res.json({
//             success:true
//         })
//     })
// });






