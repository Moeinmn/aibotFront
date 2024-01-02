'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = () => {
  const router = useRouter();


  return ( 
    <Image
      onClick={() => router.push('/')}
      src="/icons/jet.svg" 
      height="70" 
      width="70" 
      alt="Logo" 
    //   className={styles.logoImage}
    />
   );
}
 
export default Logo;


