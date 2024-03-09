'use client'

import { TextField } from '@material-ui/core';
import styles from './style.module.css'


const General=()=>{
    return(
        <>
                <div className={styles.root}>
                    <div className={styles.form} >
                      <div>
                       <span className={styles.titleIndo}>چت بات ایدی:</span>
                       <span className={styles.detailsInfo}>sG-EAaBK-R4AbfET4AhmP</span>
                     </div>

                     <div>
                        <span className={styles.titleIndo}>نام چت بات :</span>
                        <input type="text" placeholder="plotset.com" className={styles.inputName}/> 
                     </div>

                     <div>
                        <span className={styles.titleIndo}>حالت چت بات :</span>
                        <div className={styles.checkboxContainer}>
                        <label>
                          <input type="radio" name="status" value="active" /> 
                          <span className={styles.labaelCheckBox}>فعال </span>
                          <span className={styles.greenCircle}></span>
                        </label>
                        <label>
                          <input type="radio" name="status" value="not-active" className={styles.radio}/> 
                          <span className={styles.labaelCheckBox}>غیر فعال </span>
                          <span className={styles.redCircle}></span>
                        </label>

                        </div>
                      
                     </div>


              

                    </div>
                    <div className={styles.submitContainer}>
d
                    </div>

                </div>
        </>
    )

};
export default General;
