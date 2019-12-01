const express = require('express');

const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();


router.post('/registrations', function(req, res){
    UserCtrl.createUser(req,res);
});

module.exports = router