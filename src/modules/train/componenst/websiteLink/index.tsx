import { Button, TextField } from "@material-ui/core";
import "./style.css";
import { Share } from "next/font/google";
import { BiShare } from "react-icons/bi";


const WebsiteLink=()=>{
    return(
        <>
        <div style={{height:"360px",display:"flex",justifyContent:"center"}}>
            <div style={{height:"90%",width:"90%"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <button className="deleteBtn">پاک کردن همه</button>
                    <button className="addBtn">اضافه کردن </button>

                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex"}}>
                    <TextField 
                       id="outlined-basic" 
                        fullWidth
                        placeholder="https://plotset.com"
                        variant="outlined" />
                    </div>

                    <Button
                // className={styles.exportBtn}
                size={"small"}
                     >
                <BiShare  />
              </Button>
                </div>

            </div>

        </div>
        </>
    )

};


export default WebsiteLink;