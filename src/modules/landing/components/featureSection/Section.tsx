"use client"
import styles from "./styles.module.css";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from "react";

const Section = ({children , sectionName , title , desc , imgURL , mask}:{
    children : React.ReactNode , sectionName:string,title:string,desc:string,imgURL:string,mask?:boolean
}) => {
    const mainRef = useRef(null);
    const isInView = useInView(mainRef, { once: true });
  
    const animController = useAnimation();

    useEffect(()=>{
        if(isInView){
          animController.start("visible")
        }
      },[isInView])
  
    return(
        <Grid container spacing={2} className="min-h-[500px]">
        <Grid
          ref={mainRef}
          item
          xs={12}
          md={6}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className={styles.linePath}>
            <div className={styles.boxRotate}>
              <Image
                width={200}
                height={200}
                src={imgURL}
                loading="lazy"
                alt="window icon"
                className="icon-path"
              />
            </div>
            <motion.div 

            variants={{
                hidden: { height:0 },
                visible: { height:"100%" }
              }}
              initial="hidden"
              animate={animController}
              transition={{duration: 2}}

            className={styles.connectorPath}>

            </motion.div>
          </div>
          <Box>
          <div className="head-section ">
            <motion.p 
                                      variants={{
                                        hidden: {opacity:0 , x:"-20%"},
                                        visible: {opacity:1 , x:0}
                                      }}
                                      initial="hidden"
                                      animate={animController}
                                      transition={{duration: 1 , delay: 0}}
            style={{color: "#5470ff"}} className="leading-[150%]">{sectionName}</motion.p>
          </div>
            <motion.h2 
                                      variants={{
                                        hidden: {opacity:0 , x:"-20%"},
                                        visible: {opacity:1 , x:0}
                                      }}
                                      initial="hidden"
                                      animate={animController}
                                      transition={{duration: 1 , delay: .6}}
            className="text-2xl leading-[150%] font-bold big ">
            {title}
            </motion.h2>

            <motion.p 
                                      variants={{
                                        hidden: {opacity:0 , x:"-20%"},
                                        visible: {opacity:1 , x:0}
                                      }}
                                      initial="hidden"
                                      animate={animController}
                                      transition={{duration: 1 , delay: 1.2}}
            style={{color: "gray"}} className="mt-3 leading-[150%] text-base text-darker-green-grey content">
             {desc}
             </motion.p>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={
            mask ? styles.itemsContainer : "flex align-center justify-center"
        }>
          {children}
        </Grid>
      </Grid>
    )
}

export default Section;