const mongoose=require("mongoose");
const {MONGOURI}=require("../key")
 const connectDB=()=>{
    mongoose.connect(MONGOURI,{
    
    });
    mongoose.connection.on('connected',()=>{
    console.log('Connected Established to Database');
    });
    
    mongoose.connection.on('error',(err)=>{
    console.log('error connection',err);
    })
}
module.exports = {
   connectDB
  };