import { Box, Input, Button, FormControl, FormLabel } from "@chakra-ui/react"

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
        // <Box>
        // <Box width={"30%"}  margin="auto"> 
        //     <Input 
        //     <Input 
        //     <Input 
        //     <Input 
        //     </Box>
        //     <Button onClick={handleBtn}>Sign Up</Button>
        //     </Box>


<Box width="300px" margin={"auto"} marginTop={"150px"} border={"1px solid black"} padding="20px" boxShadow= "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;">
<FormControl>
<FormLabel  marginBottom={"5px"}>Enter your name</FormLabel>
    <Input width="100%" height={"25px"} marginBottom={"10px"} type="text" name="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
    <FormLabel  marginBottom={"5px"}>Email address</FormLabel>
    <Input width={"100%"} height={"25px"} marginBottom={"10px"} type="email" name="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
    <FormLabel  marginBottom={"5px"}>Password</FormLabel>
    <Input width="100%" height={"25px"} marginBottom={"10px"} type="password" name="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
    <FormLabel  marginBottom={"5px"}>Enter your age</FormLabel>
    <Input width="100%" height={"25px"} marginBottom={"10px"} type="number" name="age"  placeholder="Enter your age" onChange={(e)=>setAge(e.target.value)}/>
   
</FormControl>

<Button bg="#90CDF4" color="white" height='30px' fontSize={"18px"} padding={"14px"} onClick={handleBtn}>Register</Button>
</Box>

    )
}
export default Signup