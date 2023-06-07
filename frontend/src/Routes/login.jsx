import { Box, Input, Button, FormControl, FormLabel } from "@chakra-ui/react"
const { useState } = require("react")

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleBtn = () => {
        const payload = { email, password }
        fetch("https://impossible-earrings-clam.cyclic.app/user/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem("token", res.token)
                localStorage.setItem("rtoken", res.rtoken)
                console.log(res)
            })
            .catch((err) => console.log(err))
    }
    return (
        <Box width="300px" margin={"auto"} marginTop={"150px"} border={"1px solid black"} padding="20px" boxShadow= "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;">
            <FormControl>
                <FormLabel  marginBottom={"5px"}>Email address</FormLabel>
                <Input width={"100%"} height={"25px"} marginBottom={"10px"} type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                <FormLabel  marginBottom={"5px"}>Email address</FormLabel>
                <Input width="100%" height={"25px"} marginBottom={"10px"} type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>

            <Button bg="#90CDF4" color="white" height='30px' fontSize={"18px"} padding={"14px"} onClick={handleBtn}>Login</Button>
        </Box>
    )
}
export default Login