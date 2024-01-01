"use client"
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import Logo from "./logo";




const IntroduceSections = ()=>{
    const styles = useStyles();

    return (
        <>
              <div className={styles.root}>
                
                <Typography variant="h5" component={"p"} className={styles.introtext}>
                ساخت <span className={styles.highlightedText}>چت بات هوشمند</span> شخصی,
            </Typography>
            <Typography variant="h5" component={"p"} className={styles.introtext}>
            <Logo/> با کمترین زمان
            </Typography>
            
                
          
        </div>
        
        </>
    )
}

export default IntroduceSections;
