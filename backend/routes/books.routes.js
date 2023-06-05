const express=require("express")
const { BookModel } = require("../model/books.model")
const { auth } = require("../middleware/auth.middleware")
const bookRouter=express.Router()

bookRouter.use(auth)
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

bookRouter.post("/addBook",async(req,res)=>{
    try{
        const newBook=new BookModel(req.body)
        await newBook.save()
        res.status(200).json({msg:"new book is added"})
    }catch(err){
        res.status(400).json({err:err.message})
    }
})

bookRouter.post("/update/:id",async(req,res)=>{
    const {id}=req.params
    try{
       const book= await BookModel.findByIdAndUpdate({_id:id},req.body)
       if(book){
        res.status(200).json({msg:"book is update"})
       }
       else{
        res.status(200).json({msg:"book not present"})
       }
       
    }catch(err){
        res.status(400).json({err:err.message})
    }
})


module.exports={
    bookRouter
}