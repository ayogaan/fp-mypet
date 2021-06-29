const mongoose = require('mongoose');
const agreement = new mongoose.Schema({
    questions:[],
    pet_id :{
        type: mongoose.Schema.Types.ObjectId, ref: 'pet'
    }
});

module.exports = Agreement = new mongoose.model('agreement', agreement); 