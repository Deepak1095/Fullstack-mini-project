const { Box, Input, Button, FormControl, FormLabel } = require("@chakra-ui/react")
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
        <Box width="300px" margin={"auto"} marginTop={"150px"} border={"1px solid black"} padding="20px">
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input width={"100%"} height={"25px"} marginBottom={"10px"} type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                <FormLabel>Email address</FormLabel>
                <Input width="100%" height={"25px"} marginBottom={"10px"} type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>

            <Button size='md'  height='30px'  width="50%" border='2px solid green.500' onClick={handleBtn}>Login</Button>
        </Box>
    )
}
export default Login