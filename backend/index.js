const express=require("express")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.routes")
const { bookRouter } = require("./routes/books.routes")
const jwt=require("jsonwebtoken")

require("dotenv").config()
const app=express()
app.use(express.json())
app.use("/user",userRouter)
app.user("/books",bookRouter)
app.get("/regeneratetoken",(req,res)=>{
    const rtoken=req.headers.auth.split(" "[1])
    const decode=jwt.verify(rtoken,"rtoken")
    if(decode){
        res.status(200).json({rtoken})
    }
    else{
        res.status(400).json({msg:"token is invalid"})
    }

})
app.listen(process.env.PORT,async(req,res)=>{
try{
    await connection
    console.log("mongodb is connected")
    console.log(`server is running at port ${process.env.PORT} `)
}
catch(err){
console.log(err.message)
}
})