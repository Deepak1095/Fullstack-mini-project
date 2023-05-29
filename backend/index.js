const express=require("express")
const { connection } = require("./config/db")
require("dotenv").config()
const app=express()
app.use(express.json())

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