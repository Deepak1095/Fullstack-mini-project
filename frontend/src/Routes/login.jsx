const { Box, Input, Button } = require("@chakra-ui/react")
const { useState } = require("react")

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleBtn = () => {
        const payload = { email, password }
        fetch("http://localhost:9090/user/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then((res)=>res.json())
        .then((res)=>{
            localStorage.setItem("token",res.token)
            localStorage.setItem("rtoken",res.rtoken)
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <Box>
            <Input type="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleBtn}>Login</Button>
        </Box>
    )
}
export default Login