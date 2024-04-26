"use client";
import useSelectModal from "@/src/hooks/useSelectModal";
import styles from "./styles.module.css";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import ItemsGrid from "../ItemsGrid";
import IntegrationGrid from "../IntegrationGrid";
import { motion } from 'framer-motion'
import KnowledgeBaseGrid from "../knowledgeBaseGrid";

const FeatureSection = () => {
  return (
    <Container maxWidth="xl">
      <div style={{ marginTop: "200px" }}>
        <div className={styles.titleContianer}>
          <h2 className="text-5xl leading-[150%]">
            همه چیزی که برای ساخت <br />{" "}
            <span className={styles.gradientText}>ربات‌های سفارشی</span> نیاز
            دارید.
          </h2>
        </div>
        <Grid container spacing={2} mt={4}>
          <Grid
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
                  src="https://assets-global.website-files.com/635c4eeb78332f7971255095/657c74b7a8381409c81fcd56_zapIcon.svg"
                  loading="lazy"
                  alt="window icon"
                  className="icon-path"
                />
              </div>
              <motion.div 
              initial={{ height:0 }}
              whileInView={{
                height:"100%"
              }}
              transition={{ duration: 3 , delay: 0 }}
              className={styles.connectorPath}>

              </motion.div>
            </div>
            
            <Box>
            <div className="head-section ">
              <p style={{color: "#5470ff"}} className="leading-[150%]">دانش</p>
            </div>
              <h2 className="text-2xl leading-[150%] font-bold big ">
              یک وبسایت یا سند را بارگذاری کنید تا ربات شما آموزش داده شود.
              </h2>

              <p style={{color: "gray"}} className="mt-3 leading-[150%] text-base text-darker-green-grey content">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،

              </p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Image
              layout="fill"
              src="https://assets-global.website-files.com/635c4eeb78332f7971255095/65eeb1836d1cabac275fe48d_Import%20Knowledge-p-800.png"
              loading="lazy"
              alt="window icon"
              className="icon-path"
            /> */}
            <KnowledgeBaseGrid/>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={4}>
          <Grid
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
                  src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7184b737d36c33ca81413_LayoutIcon.svg"
                  loading="lazy"
                  alt="window icon"
                  className="icon-path"
                />
              </div>
              <motion.div 
              initial={{ height:0 }}
              whileInView={{
                height:"100%"
              }}
              transition={{ duration: 3 , delay: 0 }}
              className={styles.connectorPath}>

              </motion.div>
            </div>
            <Box>
            <div className="head-section ">
              <p style={{color: "#5470ff"}} className="leading-[150%]">دانش</p>
            </div>
              <h2 className="text-2xl leading-[150%] font-bold big ">
                لورم ایپسوم متن ساختگی با تولید
              </h2>

              <p style={{color: "gray"}} className="mt-3 leading-[150%] text-base text-darker-green-grey content">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،

              </p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={styles.itemsContainer}>
            <ItemsGrid />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid
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
                  src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d71b1e1938080cef242fea_flowIcon.svg"
                  loading="lazy"
                  alt="window icon"
                  className="icon-path"
                />
              </div>
              <motion.div 
              initial={{ height:0 }}
              whileInView={{
                height:"100%"
              }}
              transition={{ duration: 3 , delay: 0 }}
              className={styles.connectorPath}>

              </motion.div>
            </div>
            <Box>
            <div className="head-section ">
              <p style={{color: "#5470ff"}} className="leading-[150%]">اتصال</p>
            </div>
              <h2 className="text-2xl leading-[150%] font-bold big ">
              ربات خود را در برنامه‌های مورد علاقه‌تان راه‌اندازی کنید.
              </h2>

              <p style={{color: "gray"}} className="mt-3 leading-[150%] text-base text-darker-green-grey content">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،

              </p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <IntegrationGrid />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid
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
                  src="https://assets-global.website-files.com/635c4eeb78332f7971255095/64f7a4a5c75211da23399bfa_rocket-icon.svg"
                  loading="lazy"
                  alt="window icon"
                  className="icon-path"
                />
              </div>
              <motion.div 
              initial={{ height:0 }}
              whileInView={{
                height:"100%"
              }}
              transition={{ duration: 3 , delay: 0 }}
              className={styles.connectorPath}>
              </motion.div>
            </div>
            <Box>
            <div className="head-section ">
              <p style={{color: "#5470ff"}} className="leading-[150%]">دانش</p>
            </div>
              <h2 className="text-2xl leading-[150%] font-bold big ">
                لورم ایپسوم متن ساختگی با تولید
              </h2>

              <p style={{color: "gray"}} className="mt-3 leading-[150%] text-base text-darker-green-grey content">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،

              </p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default FeatureSection;
