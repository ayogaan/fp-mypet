const mongoose = require("mongoose");
const article = new mongoose.Schema({
    tittle:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    img_banner_url:{
        type:String
    },
    content:{
        type:String
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});