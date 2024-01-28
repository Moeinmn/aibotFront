"use client"
import useSelectModal from "@/src/hooks/useSelectModal";
import Logo from "./logo";
import styles from './styles.module.css'
import Image from "next/image";
import { CSSProperties, useState } from "react";
import axios from "axios";
import { ClipLoader, ClockLoader } from "react-spinners";




const IntroduceSections = ()=>{
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const SelectModal = useSelectModal(); 

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    // Here you can send a request to your API endpoint with the input value
    axios.get(`http://localhost:3001/v1/crawlerlink?url=${inputValue}`)
      .then((response:any) => {
        setLoading(false);
        SelectModal.setUrls(response?.data);
        SelectModal.onOpen();
      })
      .catch(error => {
        setLoading(false);
        SelectModal.onOpen();
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
    {loading && (
        <>
          <div className={styles.loadingOverlay}></div> {/* Semi-transparent overlay */}
          <div className={styles.loadingIndicator}>
            <ClockLoader
              color={"blue"}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      )}

        </>
    )
}

export default IntroduceSections;
