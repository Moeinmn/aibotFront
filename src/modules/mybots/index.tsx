"use client" 
import "./style.css";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BotBox from "./components/bot-box";
import { Box } from "@material-ui/core";
import { SearchNormal1 } from "iconsax-react";
import useStyles from "./components/style";


const MyBots=()=>{
  const styles = useStyles();
  const projectList=[
    {
      type:"instagram",
      name:"plotset.com",
    },
    {
      type:"instagram",
      name:"plotset.com",
    },    {
      type:"instagram",
      name:"plotset.com",
    },    {
      type:"instagram",
      name:"plotset.com",
    }
  ]
    return(
      <Container style={{
        marginTop:"90px"
      }}>
    
        <div id="navbar" style={{
          display:'flex',
          flexDirection:"row",
          // alignItems:'center',
          justifyContent:'space-between',
          width:"100%"

        }} >
          <div>
          <p style={{
                fontSize:"28px"
            }} >چت بات های من</p>
             <p style={{
                fontSize:"12px",
                color:"#8F8F8F",
                marginTop:'8px'
            }} >در اینجا، می توانید بات های خود را ببینید و بات های جدید بسازید.  !</p>

          </div>
          <div>
          <button
              style={{
              background:"#1D4ED8",
              color:'white',
              padding:"12px",
              borderRadius:"18px",
              fontSize:"12px"
              // width:"40%",

             }}> چت بات جدید</button>
          </div>
          

            
        </div>

      <Paper 
        elevation={2}
        style={{
          marginTop:"50px"
        }}
       >
        
         <Box
              display={"flex"}
              width="100%"
              justifyContent={"center"}
              alignItems={"center"}
              mb={2}
            >
              <Box mx={1} pl={2} className="searchBox">
                <SearchNormal1 color="#8F8F8F" />
                <Box ml={2} my={2} display="flex" width="100%">
                  <input
                    width={"100%"}
                    placeholder="Search ..."
                    type="text"
                    onChange={(e) =>
                    console.log(e)
                    }
                  />
                </Box>
              </Box>
            
          </Box>
         <Grid container  spacing={2} mt={2}>
          {projectList.map((item,bindex)=>{
            return (
              <Grid
                    
                    key={`project-item-${bindex}`}
                    style={{
                      width:"100%"
                    }}
                    item
                    sm={4}
                    md={3}
                    lg={3}
                    xl={2}
                  >
                    <BotBox/>
                    
                  </Grid>
            )
          })}

         </Grid>

      </Paper>


      </Container>
   
    )
}

export default MyBots;