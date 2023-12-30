import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        overflow: "hidden",
        height: "auto",
        marginBottom: theme.spacing(10),
      },
  landingHeader: {
    textAlign: "center",
    "& span": {
      backgroundImage: "linear-gradient(90deg, #0061F7 61.46%, #00E0FF 100%)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
  },
  landingContainer: {
    maxWidth: 1500,
    [theme.breakpoints.only("lg")]: {
      paddingRight: 60,
      paddingLeft: 60,
    },
  },
  youtubeModal: {
    "& .MuiPaper-root": {
      maxWidth: "925px",
      maxHeight: "520px",
      height: "80%",
    },
  },
  youtubeVideo: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    "& iframe": {
      width: "100%",
      height: "100%",
    },
  },
}));
export default useStyles;
