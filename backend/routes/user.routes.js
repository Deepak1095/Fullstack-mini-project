const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
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

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    const token=jwt.sign({data:"Backend"},"india", { expiresIn: '1h' })
                    console.log(token)
                    res.status(200).json({msg:"user is login ",token:token})
                }
                else{
                    res.status(200).json({err:err.message})
                }
            })
        }
        else{
            res.status(200).json({msg:"user not found please register"})
        }

    }
    catch(err){
        res.status(400).json({err:err.message})
    }
})

module.exports={
    userRouter
}