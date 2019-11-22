const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        id: Number,
        email: String,
        registration: String,
        reg_data: String
    },
    {timestamp: true}
);
module.exports =  mongoose.model("user", UserSchema);
