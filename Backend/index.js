const express=require("express")
const app=express()
const PORT=4000
const {connectDB}=require("./config/db")
const userRoute=require("./routes/userRoute")



app.use(express.json())
app.use(userRoute);
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})
connectDB();





