import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "flex-end",
      flexDirection: "column",

      "& > *": {
        margin: theme.spacing(1),
      },
    },
    button: {
      color: "gray",
      "&:hover": {
        background: "#80808059",
      },
    },
  }));
