const mongoose = require('mongoose');
const species = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    slug:{
        type:String,
    }
});

module.exports = Species = mongoose.model('species', species);