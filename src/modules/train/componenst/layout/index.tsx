"use client"

import { FC } from "react";
import Navbar from "./components/navbar";

const Layout:FC=(props:any)=>{
 return(
        <>
        <div style={{display:"flex",}}>
        <div style={{width:"65%"}}>
            <Navbar/>
            <div>{props.children}</div>
        </div>
        <div>
          
        </div>

        </div>
        </>
  )


};
export default Layout;