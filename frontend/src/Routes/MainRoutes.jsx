const { Route, Routes } = require("react-router-dom")
const { default: Login } = require("./login")
const { default: Signup } = require("./signup")

const MainRoutes=()=>{
    return (
        <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}

export default MainRoutes