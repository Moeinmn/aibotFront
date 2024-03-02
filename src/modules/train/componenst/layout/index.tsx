"use client"

import { FC } from "react";
import Navbar from "./components/navbar";
import SourceCard from "./components/SourceCard";

const Layout:FC=(props:any)=>{
 return(
        <>
        <div style={{display:"flex",}}>
        <div style={{width:"65%"}}>
            <Navbar/>
            <div>{props.children}</div>
        </div>
        <div>
          <SourceCard/>
          
        </div>

        </div>
        </>
  )


};
export default Layout;