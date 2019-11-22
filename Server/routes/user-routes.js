const express = require('express');

const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();

//router.post('/registration', UserCtrl.createUser);

router.post('/registration', function(req, res){
    UserCtrl.createUser});

module.exports = router