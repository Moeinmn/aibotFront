'use client'
import React, { FC, ReactNode } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { ArrowRight, NotificationCircle } from "iconsax-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SearchNormal1 } from "iconsax-react";
import styles from './style.module.css'


const Header = (props:any) => {
  const pathname = usePathname()


  // if the user was at project, we will show back button.
  const canBack = pathname.startsWith("/project/");
//   const isMyProjects = router.pathname.match(LINKS.PANEL_PROJECTS);
//   const canShowCharts = !router.pathname.match("/project");

  return (
    <>
    <div style={{
        // backgroundColor:"red",
        height:"80px",
        position:"fixed",
        width:"100%",
        top:"0"
    }}>
        <div style={{
               display: "flex",
               justifyContent: "space-between",
               overflow: "hidden",
               height:"inherit"

        }}>
            <div style={{
                display:"flex",
                zIndex:"999",
                alignItems:"center",
            
            }}>
            {true && (
              <Box  mr={1}>
                <IconButton>
                  <ArrowRight />
                </IconButton>
              </Box>
            )}

            <div>
            <Image
    
                 src="/logo.svg" 
                 height="120" 
                 width="120" 
                  alt="Logo" 
             />


            </div>


            </div>

            <div>
                <div style={{
                       width: "48%",
                       display:"flex"

                }} className={styles.searchBox}>
                    <SearchNormal1 color="#8F8F8F" />
                    <div style={{width:"100%"}}>
                    <input
                        width={"100%"}
                        placeholder="جستوجو کردن ..."
                        type="text"
                      />

                    </div>
                 


                </div>
            </div>

        </div>
    
    </div>
    
    </>
  );
};

export default Header;
