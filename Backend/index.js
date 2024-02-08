const express=require("express")
const cors=require("cors");
const app=express()
const PORT=4000

const {connectDB}=require("./config/db")
const userRoute=require("./routes/userRoute")


app.use(cors());
app.use(express.json())
app.use(userRoute);

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})
connectDB();





