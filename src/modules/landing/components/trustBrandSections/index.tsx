"use client"

import Image from 'next/image';
import styles from './styles.module.css'
import { InfiniteMovingCardsDemo } from './InfiniteMovingCardsDemo';

const TrustBrnadSections = ()=>{
    return(
        <>
        <div className={styles.root}>

        <p>
        بیش از هزاران کسب و کار آنلاین به ما اعتماد کردند.
        </p>
        {/* <div className={styles.brandRow}>
        <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/jabama.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
         <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/digipay.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
            <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/basalam.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
             <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/snappmarket.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />

           <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/banksaman.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
            <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/shatel.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
         <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/ofoghkorosh.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
        <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/rahshahrsazi.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
                <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/raja.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
        </div> */}

<InfiniteMovingCardsDemo/>

        

        </div>

        </>
    )
};

export default TrustBrnadSections;