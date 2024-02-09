"use client" 
import { Box, Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import useStyles from "./style";
import clsx from "clsx";
import Divider from '@mui/material/Divider';
import "./style.css";
import ReactTimeAgo from "react-time-ago";


const BotBox=()=>{
  const styles = useStyles();

    return(
        <Paper className="paperContainer" variant={"outlined"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
       
          <Box
            my={2}
            className={clsx("image", "imageBox", "imageContainer")}
          >
            <Image
              unoptimized={true}
              width={208}
              height={147}
              alt="axs"
              src={"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRYT2_qpM81JX8FdDi53mc-ZNIGhwVGlDtG5uTuuHU9K6rTaRZqONIPL7tEiwLb8t4D4mBbt0-UL5ijZBU"}
            />
          </Box>
        <Box width={"100%"}>
          <Divider />
        </Box>
        <Box className={styles.info} style={{
            alignItems:"center",
            display:'flex',
            justifyContent:"center",
            alignContent:'center'
        }}>
       
            <Box display={"flex"} flexDirection={"column"}>
              <Typography className="title" variant={"body1"}>
               plotset.com
              </Typography>
              <Typography
                variant={"caption"}
                color={"textSecondary"}
                className="capitalize"
              >
                بروزرسانی{" "}
                {true && (
                //   <ReactTimeAgo
                //     verboseDate={new Date().toISOString()}
                //     date={new Date()}
                //     locale="en-US"
                //   />
                "7 روز قبل"
                )}
              </Typography>
            </Box>
         
        </Box>
       
      </Box>
    </Paper>
    )
};

export default BotBox;