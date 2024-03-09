"use client"

import TabLink from "./components/tablink";



const menuItems = 
  [
        {
          title: "عمومی",
          store:"General"
        },
        {
          title: "هسته",
          store:"Model"
        },
        {
          title: "ظاهری",
          store:"Apperence"
        }
   ]


const Navbar=()=>{
   
    return(
        <div>
            <ul style={{display:'flex',columnGap:"110px"}}>
             {menuItems.map((item)=>{
                return(
                    <li><TabLink item={item}/></li>
                )
             })}
            </ul>
            <hr style={{marginTop:"15px"}}></hr>

        </div>
        

    )
    
};
export default Navbar;