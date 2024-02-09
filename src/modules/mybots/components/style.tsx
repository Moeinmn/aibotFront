import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: "#F6F8FB",
  },
  headerContainerStyle: {
    maxWidth: "55%",
  },
  titleWelcome: {
    marginInlineEnd: theme.spacing(1),
  },
  progressContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  paperContainer: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),

    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginBottom: theme.spacing(8),

    borderRadius: 8,
  },
  projectsContainer: {
    display: "flex",
  },
  searchBox: {
    width: "48%",
    display: "flex",
    borderRadius: 8,
    border: "solid 1px #E9ECEF",
    fontSize: 14,
    fontWeight: 400,
    alignItems: "center",
    "& input": {
      border: "none",
      width: "100%",
    },
    "& input:focus": {
      outline: 0,
    },
    "& input::placeholder": {
      color: "#CBCBCB",
    },
  },
  switchMode: {
    border: "solid 1px #E9ECEF",
    display: "flex",
    borderRadius: 8,
    alignItems: "center",

    "& .line": {
      height: 16,
    },
    "& .btn": {
      cursor: "pointer",
    },
    "& svg": {
      "&.active": {
        color: theme.palette.primary.main,
      },
      width: 16,
      height: 16,
    },
  },
  emptyBox: {
    marginTop: theme.spacing(6),
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& span": {
      marginTop: theme.spacing(1),
    },
  },
  gridItemWidth: {
    width: "100%",
  },
}));

export default useStyles;
