const User = require('../models/user');

createUser = function(req,res) {
    const body = req.body;
    console.log(body);
    if(!body){
        return res.status(400).json({
            success: false,
            error: 'Хуйня вышла'
        })
    }

    const user = new User(body);

    if(!user){
        return res.status(400).json({
            success: false,
            error: 'С пользователем Хуйня вышла'
        })
    }

      user
        .save()
        .then(() => {
            return res.status(201). json({
                success: true,
                id: user._id,
                message: 'User is created'
            })
        })
        .catch(error => {
            return res.status(400).json({
                    error,
                    message: 'Пиздой накрылся юзер!'
            })
        })
}

// дописать!!!

// {
    // 'id': 1,
    // 'email': 'herfrom@mount',
    // 'registration': 'reg',
    // 'reg_data': 'today'
// }

module.exports = {
    createUser
}

