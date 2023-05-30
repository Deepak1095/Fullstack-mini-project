const express=require("express")
const bcrypt=require("bcrypt")
const { UserModel } = require("../model/user.model")
const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {name,email,password,age}=req.body
    
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.status(404).json({err:err.message})
            }
            else{
                const newUser=new UserModel({name,email,password:hash,age})
                await newUser.save()
                res.status(200).json({msg:"User registered please login "})
            }
        })
       
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
})

module.exports={
    userRouter
}