const mongoose = require('mongoose');
const uri = 'mongodb+srv://dbuser:fanfanfan@cluster0.e6dlz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const conDB = async()=>{
    await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true

    });
    console.log("db connected");
}  

module.exports = conDB;