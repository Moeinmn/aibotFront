"use client"

import IntroduceSections from "./components/introduceSections";
import TrustBrnadSections from "./components/trustBrandSections";
import FeatureSection from "./components/featureSection";
import useStyles from "./styles";
import FeaturesCards from "./components/FeaturesCards";
import TryNow from "./components/TryNow";


const Landing=()=>{
    const styles = useStyles();

    return (
        <>
        <IntroduceSections/>
        <TrustBrnadSections/>
        <FeatureSection/>
        <FeaturesCards/>
        <TryNow/>
        </>
    )
}

export default Landing;
