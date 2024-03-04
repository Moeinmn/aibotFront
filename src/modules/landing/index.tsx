"use client"

import IntroduceSections from "./components/introduceSections";
import TrustBrnadSections from "./components/trustBrandSections";
import FeatureSection from "./components/featureSection";
import useStyles from "./styles";


const Landing=()=>{
    const styles = useStyles();

    return (
        <>
        <IntroduceSections/>
        <TrustBrnadSections/>
        <FeatureSection/>
        </>
    )
}

export default Landing;
