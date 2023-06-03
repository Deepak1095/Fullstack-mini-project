const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { UserModel } = require("../model/user.model")
const { BlackListModel } = require("../model/blacklist.model")
const userRouter=express.Router()
require("dotenv").config()
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
                    const token=jwt.sign({data:"Backend"},process.env.SECRET_KEY, { expiresIn: '1h' })
                    const rtoken=jwt.sign({token:"refreshtoken"},process.env.SECRET_KEY, { expiresIn: '10h' })
                    console.log(token)
                    res.status(200).json({msg:"user is login ",token,rtoken})
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

userRouter.get("/logout",async(req,res)=>{
    try{
        const token=req.headers.auth.split(" ")[1]
        const existingToken= await BlackListModel.findOne({token:token})
        if(!existingToken){
          const blacklistToken=new BlackListModel({token:token,expireAt:new Date(Date.now()+24*60*60*1000)})
          await blacklistToken.save()
          await BlackListModel.deleteMany({expireAt:{$lte:new Date()}})
          res.status(200).json({msg:"user logout"})
        }
        else{
            res.status(200).json({msg:"user already logout"})
        }
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
    
})

module.exports={
    userRouter
}