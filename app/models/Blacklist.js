const mongoose = require("mongoose");
const blacklist = new mongoose.Schema({
    token:{
        type: String,
        required: true
    },
});

module.exports = Blacklist = new mongoose.model("blacklist", blacklist);