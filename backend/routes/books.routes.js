const express=require("express")
const { BookModel } = require("../model/books.model")
const bookRouter=express.Router()

bookRouter.get("/",async(req,res)=>{
    try{
 const Books=await BookModel.find()
 res.status(200).json({Books:Books})
}
catch(err){
res.status(400).json({err:err.message})
}
})

bookRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
        
        const DeletedBook=await BookModel.findByIdAndDelete({_id:id})
        res.status(200).json({msg:"This book is deleted","Deleted book":DeletedBook})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
})

module.exports={
    bookRouter
}