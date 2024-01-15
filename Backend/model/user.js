const mongoose= require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true

    },
    badgeNumber:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true


    }


})
const User=mongoose.model("user", userSchema);
module.exports = User;


