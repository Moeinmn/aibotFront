"use client"
import { Typography } from "@material-ui/core";
import Logo from "./logo";
import styles from './styles.module.css'
import Image from "next/image";




const IntroduceSections = ()=>{
 

    return (
        <>
    <div className={styles.root}>
 
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
        <Logo/>
     </h5>
    </div>
    <div className={styles.detailsText} >
      <p>
بات های مانند chat gpt برای پروژه یا کسب کار خود بسازید تا کارها را انجام دهید. 🎯
      </p>
    </div>
    <input type="text" className={styles.inputStyle} placeholder="آدرس وبسایت مورد نظرتان وارد کنید ..." />
    
    <div className={styles.demoContainer}>
    <div >
    <button className={styles.customButton}>ساختن بات دمو</button>
    </div>
    <Image
      src="/images/letfBlur.png" 
      height="100" 
      width="300" 
      alt="Logo" 
    />
    <div className={styles.imagePhone}>

    <Image
      src="/images/phone.png" 
      height="400" 
      width="600" 
      alt="Logo" 
    />
    </div>

    </div>
  
    </div>

        </>
    )
}

export default IntroduceSections;
