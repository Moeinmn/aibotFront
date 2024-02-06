import Image from "next/image";
import "./style.css";


const Register=()=>{
    return (
      <>
      <div className="root"> 
      <div>

      </div>
        <div id="form-section" style={{
          // backgroundColor:"red",
          width:"100%",
          maxWidth:"1000px",
          display:'flex',
          justifyContent:"center",
          alignItems:'center'
        }}>
          <div className="form" style={{
            backgroundColor:"white",
            width:"70%",
            height:"70%",
          }}>
            <h2 style={{
              fontSize:"32px"
            }}>ایجاد حساب کاربری</h2>
            <p style={{
              position:"relative",
              top:"16px",
              fontSize:"13px"
            }}>از قبل حساب کابری دارید؟ <span style={{
              color:"blue"
            }}>وارد شوید</span></p>

            <div className="register" style={{
              position:'relative',
              top:"60px",
              display:'flex',
              flexDirection:'column',
              rowGap:"25px"
            }}>
            <input type="text" placeholder="نام" style={{
              width:"84%",
              padding:"15px",
              border:"solid",
              borderWidth:"0.4px",
              borderRadius:"10px"

            }} />
            <input type="text" placeholder="نام خانوادگی" style={{
              width:"84%",
              padding:"15px",
              border:"solid",
              borderWidth:"0.4px",
              borderRadius:"10px"

            }} />
              <input type="text" placeholder="ایمیل" style={{
              width:"84%",
              padding:"15px",
              border:"solid",
              borderWidth:"0.4px",
              borderRadius:"10px"

            }} />
              <input type="text" placeholder="رمز عبور" style={{
              width:"84%",
              padding:"15px",
              border:"solid",
              borderWidth:"0.4px",
              borderRadius:"10px"

            }} />
             <button  style={{
              background:"#1D4ED8",
              color:'white',
              padding:"15px",
              borderRadius:"18px",
              width:"40%",
              marginRight:"22%",
              marginTop:"22px"

             }}>
              عضویت
            </button>
            </div>
          </div>
           
        </div>
        <div id="vector-container" style={{
          width:"100%"
        }}> 
        <div id="vector-section" style={{
          width:"100%",
          height:"100%",
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <div className="vectorImage" style={{
            backgroundColor:"white",
            width:"70%",
            height:"70%",

          }}>
            
            <Image
                    src="/images/register.jpg" 
                    height="400" 
                    width="500" 
                    alt="Logo" 
                   />
         

          </div>
            
        


        </div>
        </div>
    
      </div>
      </>
    )

}


export default Register;