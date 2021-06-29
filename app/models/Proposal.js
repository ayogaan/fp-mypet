const mongoose = require("mongoose");
proposal = new mongoose.Schema({
    capability:[],
    user_id : {
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
    pet_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'pet'
    }
});

module.exports = Proposal = new mongoose.model('proposal', proposal);