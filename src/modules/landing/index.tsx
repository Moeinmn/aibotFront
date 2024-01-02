"use client"

import IntroduceSections from "./components/introduceSections";
import TrustBrnadSections from "./components/trustBrandSections";
import useStyles from "./styles";


const Landing=()=>{
    const styles = useStyles();

    return (
        <>
        <IntroduceSections/>
        <TrustBrnadSections/>
        </>
    )
}

export default Landing;
