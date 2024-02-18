"use client"

import TabLink from "./component/tablink";



const menuItems = 
  [
        {
          title: "فایل",
          store:"File"
        },
        {
          title: "متن",
          store:"Text"
        },
        {
          title: "وبسایت",
          store:"Website"
        },
        {
          title: "پرسش و پاسخ",
          store:"QandA"
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