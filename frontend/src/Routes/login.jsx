const { Box, Input, Button } = require("@chakra-ui/react")
const { useState } = require("react")

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleBtn = () => {
        const payload = { email, password }
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