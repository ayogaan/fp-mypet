const mongoose = require('mongoose');


const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = User = mongoose.model('user', user);