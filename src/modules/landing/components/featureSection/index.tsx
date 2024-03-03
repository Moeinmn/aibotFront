"use client"
import useSelectModal from "@/src/hooks/useSelectModal";
import styles from './styles.module.css'
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { Box } from "@mui/material";





const FeatureSection = ()=>{

    return (
        <div style={{marginTop : "200px"}}>
    {/* <div className={styles.root}>
    <div className={styles.continer}>
     <h5>
        <p className={styles.introtext}>
            ساخت <span className={styles.highlightedText}>چت بات هوشمند</span> شخصی,
        </p>
     </h5>
     <h5 className={styles.textLogo}>
        <p className={styles.introtext}>
             با کمترین زمان
        </p>
     </h5>
    </div>
          </div> */}
          <Grid container spacing={2}>
        
        <Grid item xs={12} md={6} style={{display: "flex" , flexDirection:"row"}}>
        <div className={styles.linePath}>
  <div className={styles.boxRotate}>
    {/* <Image 
    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7184b737d36c33ca81413_LayoutIcon.svg"
     loading="lazy" alt="window icon" className="icon-path" 
     /> */}
  </div>
  <div className={styles.connectorPath}></div>
</div>
          <Box>
          <Typography variant="h2" className="big">
            Notre monde tourne autour de la rotation
          </Typography>
          <Typography
            variant="body1"
            className="content text-darker-green-grey"
          >
            <div>
              <div>
                Les roulements ont contribué à la croissance des industries, ont
                révolutionné les transports et ont amélioré la qualité de vie
                globale des humains. Et SKF a participé à une grande partie du
                processus.
              </div>
              <div>&nbsp;</div>
              <div>
                Au fil du temps, nous avons repoussé les limites du possible. Et
                aujourd’hui, nous continuons à développer des technologies de
                roulement qui soutiennent le progrès et contribuent à améliorer
                la vie quotidienne, aujourd’hui et demain.
              </div>
            </div>
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        </Grid>
      </Grid>
        </div>
    )
}

export default FeatureSection;
