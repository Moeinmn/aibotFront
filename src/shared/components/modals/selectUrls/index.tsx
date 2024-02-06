'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from './styles.module.css'






const ModalCustom = () => {


  return (

    <>
    <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
            <span id="closeModalBtn" className={styles.close}>&times;</span>
            <p>Welcome to this beautiful modal! It's designed to catch your attention.</p>
        </div>
    </div>
    </>
   
  );
}

export default ModalCustom;
