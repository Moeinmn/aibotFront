import { FC } from "react";
import Navbar from "./components/navbar";

const Layout:FC=(props:any)=>{
 return(
        <>
        <div>
            <Navbar/>
            <main>{props.children}</main>

        </div>
        </>
  )


};
export default Layout;