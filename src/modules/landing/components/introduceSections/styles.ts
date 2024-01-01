import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        overflow: "hidden",
        height: "auto",
        top:"115px",
        textAlign:"center",


      },
      introtext:{
        fontSize:"4.2rem"

      },
      highlightedText: {
        color: "#6254FF", // Specific color for highlighted text
    },

}));
export default useStyles;
