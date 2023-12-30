"use client"
import { useState } from "react";
import Logo from "./logo";
import useStyles from "./styles";
// import styles from "./styles.module.css"





  const Header = () => {
    const styles = useStyles();
    // State to manage whether the menu is active or not
    const [isActive, setIsActive] = useState(false);

    // Toggle the active state of the menu
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div className={styles.header}>
                <div className={styles.container}>
                    <nav className={styles.navbar}>
                        <Logo />
                        <div 
                            className={styles.burger} 
                            id="burger" 
                            onClick={toggleMenu} // Attach click event to burger
                        >
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                        </div>
                        <span 
                            className={`${styles.overlay} ${isActive ? styles.overlayisactive : ''}`}
                            onClick={toggleMenu} // Attach click event to overlay
                        ></span>
                        <div 
                            className={`${styles.menu} ${isActive ? styles.menuisactive : ''}`} 
                            id="menu"
                        >
                            <ul className={styles.menuInner}>
                                {/* Each link closes the menu on click */}
                                <li className="menuItem">
                                    <a className={styles.menuLink} href="#" onClick={toggleMenu}>امکانات</a>
                                </li>
                                <li className="menuItem">
                                    <a className={styles.menuLink} href="#" onClick={toggleMenu}>قیمت</a>
                                </li>
                                <li className="menuItem">
                                    <a className={styles.menuLink} href="#" onClick={toggleMenu}>مستندات</a>
                                </li>
                                <li className="menuItem">
                                    <a className={styles.menuLink} href="#" onClick={toggleMenu}>درباره ی ما</a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.auth}>
                        <a href="./login" >
                          ورود</a>
                        <a href="./login" className={styles.menuBlock}>ثبت نام</a>
                        </div>

                    </nav>
                </div>
            </div>
        </>
    );
};


export default Header;