import {Box, Button, Input} from "@chakra-ui/react"

const { useState } = require("react")

const Signup=()=>{
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleBtn=()=>{
        const payload={name,email,password,age}
        console.log(payload)
        fetch("https://impossible-earrings-clam.cyclic.app/user/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
           
        })
        .then((res)=>res.json())
        .then(res=>console.log(res))
        .catch((err)=> console.log(err) )
    }
    return (
        <Box>
        <Box width={"30%"}  margin="auto"> 
            <Input type="text" name="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
            <Input type="email" name="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
            <Input type="password" name="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            <Input type="number" name="age"  placeholder="Enter your age" onChange={(e)=>setAge(e.target.value)}/>
            </Box>
            <Button onClick={handleBtn}>Sign Up</Button>
            </Box>
    )
}
export default Signup