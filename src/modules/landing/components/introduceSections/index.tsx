"use client"
import useSelectModal from "@/src/hooks/useSelectModal";
import Logo from "./logo";
import styles from './styles.module.css'
import Image from "next/image";
import { useState } from "react";
import axios from "axios";




const IntroduceSections = ()=>{
  const [inputValue, setInputValue] = useState('');
  const SelectModal = useSelectModal(); 

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Here you can send a request to your API endpoint with the input value
    axios.post('your-api-endpoint', { input: inputValue })
      .then((response:any) => {
        SelectModal.setUrls(response);
        SelectModal.onOpen();
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error if needed
      });
  };


    return (
        <>
    <div className={styles.root}>
        <div>

        <Image
      src="/images/rightBlur.png" 
      height="100" 
      width="650" 
      alt="Logo" 
      className={styles.rightBlur}
    />
    <Image
      src="/images/rightBlur.png" 
      height="100" 
      width="300" 
      alt="Logo" 
      className={styles.leftBlur}
    
    />
        </div>

 

      
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


    <input type="text" value={inputValue} onChange={handleInputChange} className={styles.inputStyle} placeholder="آدرس وبسایت مورد نظرتان وارد کنید ..." />
    
    <div className={styles.demoContainer}>
    <div>
    <button className={styles.customButton} onClick={handleSubmit}>ساختن بات دمو</button>
    </div>
 
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
