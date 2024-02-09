import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    skeletonRoot: {
        display: "flex",
        boxShadow: "none",
        border: "1px solid #CBCBCB"
    },
    paperContainer: {
        position: "relative",
        cursor: "pointer",
        boxShadow: "none",
        border: "1px solid #E9ECEF",
        transition: "ease-out 150ms",
        overflow: "hidden",
        "&:hover": {
            borderColor: theme.palette.primary.main,
        },
        "&:hover .image img": {
            transform: "scale(1.1)",
        },
        "&:hover .imageBox:after": {
            opacity: 1
        },
        "&:hover .title": {
            color: theme.palette.primary.main
        },
        "&.delete": {
            color: "#fe2e2f !important"
        },
    },
    moreMenu: {
        marginRight: theme.spacing(1),
        "& .moreMenuIcon": {
            maxWidth: "none !important",
        }
    },
    delete: {
        color: theme.palette.error.dark
    },
    paperContainerList: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        height: "100%",
        "& .line": {
            zIndex: 5
        },

        "& .image": {
            maxWidth: 120,
            maxHeight: 80,
            minWidth: 120,
            minHeight: 80,
        },
        "& .left": {
            width: "85%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center"
        },
        "& .info": {
            display: "flex",
            flexDirection: "column",
            paddingLeft: theme.spacing(2),
            position: "relative",
            overflow: "hidden",
            width: "55%",

            "& .title": {
                display:"inline-block",
                width: "100%", 
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }
        }
    },
    imageContainer: {
        boxShadow: "inset 0px 2px 7px rgba(255, 255, 255, 0.75)",
        background: "#F9F9F9",
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 4,
        position: "relative",
        "& img": {
            transition: "ease-out 150ms"
        },
        "&::after": {
            content: "'Open'",
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5),
            backgroundColor: "#0061F7B5",
            backdropFilter: "blur(20px)",
            color: "white",
            fontSize: 14,
            fontWeight: 400,
            textAlign: "center",
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(50%,-50%)",
            borderRadius: 8,
            opacity: 0,
            transition: "ease-in 150ms"
        },

    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(1)
    },
    skeletonRadius: {
        borderRadius: 6
    },
    info: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(2, 0, 2, 2),
        "& a": {
            display: "block",
            width: "80%",
            "& span": {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }
        }
    },

}));

export default useStyles;