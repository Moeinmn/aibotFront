'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import useStyles from "./styles";

const Logo = () => {
  const router = useRouter();
  const styles = useStyles()

  return ( 
    <Image
      onClick={() => router.push('/')}
      src="/icons/jet.svg" 
      height="120" 
      width="120" 
      alt="Logo" 
    //   className={styles.logoImage}
    />
   );
}
 
export default Logo;


