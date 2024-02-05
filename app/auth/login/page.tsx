import Login from "@/src/modules/auth/login";
import Register from "@/src/modules/auth/register";
import { NextPage } from "next";

const LoginPage:NextPage=()=>{
    return(
        <Login/>
    )

};

export default LoginPage;