import { Typography } from "@material-ui/core";
import useStyles from "./styles";




const IntroduceSections = ()=>{
    const styles = useStyles();

    return (
        <>
        <div className={styles.root}>
            <Typography variant="h5" component={"p"}>
            ساخت چت بات هوشمند شخصی,
            </Typography>
        </div>
        
        </>
    )
}

export default IntroduceSections;
