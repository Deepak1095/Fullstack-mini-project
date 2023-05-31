const express=require("express")
const { UserModel } = require("../model/user.model")
const bookRoutes=express.Router()

bookRoutes.get("/",async(req,res)=>{
    try{
 const Books=await UserModel.find()
 res.status(400).json({Books:Books})
}
catch(err){
res.status(400).json({msg:""})
}
})

module.exports={
    bookRoutes
}