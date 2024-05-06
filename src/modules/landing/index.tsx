"use client"

import IntroduceSections from "./components/introduceSections";
import TrustBrnadSections from "./components/trustBrandSections";
import FeatureSection from "./components/featureSection";
import useStyles from "./styles";
import FeaturesCards from "./components/FeaturesCards";
import TryNow from "./components/TryNow";
import { PreviewTracingBeam } from "@/src/shared/components/common/BeamTrace";


const Landing=()=>{
    const styles = useStyles();

    return (
        <>
        {/* <div style={{
            backgroundImage: "url(https://assets-global.website-files.com/635c4ee…/651bdf2…_hero_dot_grid.webp), linear-gradient(#fff, #faf9f7)",
            backgroundPosition: "50% 100%, 0 0",
            backgroundRepeat: "no-repeat, repeat",
            backgroundSize: "90%, auto",
            // paddingop: 48px;
            // padding-bottom: 48px;
            // display: block;
            // position: relative;
            // overflow: hidden;
        }}> */}
        <IntroduceSections/>
        <TrustBrnadSections/>
        {/* </div> */}
        <FeatureSection/>
        <FeaturesCards/>
        <TryNow/>
        </>
    )
}

export default Landing;
