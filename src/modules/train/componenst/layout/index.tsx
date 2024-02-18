"use client"

import { FC } from "react";
import Navbar from "./components/navbar";

const Layout:FC=(props:any)=>{
 return(
        <>
        <div>
            <Navbar/>
            <div>{props.children}</div>

        </div>
        </>
  )


};
export default Layout;