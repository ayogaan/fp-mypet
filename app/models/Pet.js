const mongoose = require('mongoose');

const pet = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['unknown','male','female'],
        default: 'unknown'
    },
    bornyear:{
        type:String,
        required:true
    },
    isvaccinated:{
        type:String,
        enum:['yes','no'],
        default: 'no'
    },
    description:{
        type:String,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
    species:{
        type: mongoose.Schema.Types.ObjectId, ref: 'species'
    },
    gallery:[]

});

module.exports = Pet = mongoose.model('pet',pet);