const mongoose = require('mongoose')
const express= require('express')
const router=express.Router();
const User=require("../model/user")

router.post("/check",(req,res)=>{
    const {name,rating,badgeNumber,location,contactNumber,image}=req.body;
    if(!name||!rating||!badgeNumber||!location||!contactNumber||!image)
    {
    return res.status(422).json({message:"Enter all fields"})
    }
    const user=new User({name:name,rating:rating,badgeNumber:badgeNumber,location:location,contactNumber:contactNumber,image:image})
    user.save()
    .then(result=>{
        if(result!=null)
        {   
               console.log(result);                         

            return res.status(200).json({user:result})
        }
        else
        {
            return res.status(422).json({message:"failure"})
        }
    })
    .catch(err=>{
        return res.status(400).json({error:err.message});
    })
        
    })

    router.get("/dummy",(req,res)=>{

    })
    
    



module.exports = router