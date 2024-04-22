"use client";
import useSelectModal from "@/src/hooks/useSelectModal";
import styles from "./styles.module.css";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import ItemsGrid from "../ItemsGrid";
import IntegrationGrid from "../IntegrationGrid";

const FeatureSection = () => {
  return (
    <Container maxWidth="xl">
    <div style={{ marginTop: "200px" }}>
    <div className={styles.titleContianer}>
      
<h2 className="text-5xl">همه چیزی که برای ساخت <br/> <span className={styles.gradientText}>ربات‌های سفارشی</span> نیاز دارید.</h2>
      </div>
      <Grid container spacing={2} height={"1200px"} mt={4}>
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
     loading="lazy" alt="window icon" className="icon-path" 
     />
            </div>
            <div className={styles.connectorPath}></div>
          </div>
          <Box>
          <h2 className="text-4xl font-bold big">
  لورم ایپسوم متن ساختگی با تولید
</h2>

<p className="text-base text-darker-green-grey content">
  
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
    جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
    برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
    زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
    دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
    پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
  
</p>

          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={{position: "relative"}}>
        <ItemsGrid/>
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
     loading="lazy" alt="window icon" className="icon-path" 
     />
            </div>
            <div className={styles.connectorPath}></div>
          </div>
          <Box>
          <h2 className="text-4xl font-bold big">
  لورم ایپسوم متن ساختگی با تولید
</h2>

<p className="text-base text-darker-green-grey content">
  
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
    جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
    برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
    زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
    دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
    پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
  
</p>

          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <IntegrationGrid/>
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
     loading="lazy" alt="window icon" className="icon-path" 
     />
            </div>
            <div className={styles.connectorPath}></div>
          </div>
          <Box>
          <h2 className="text-4xl font-bold big">
  لورم ایپسوم متن ساختگی با تولید
</h2>

<p className="text-base text-darker-green-grey content">
  
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
    جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
    برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
    زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
    دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
    پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
  
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
