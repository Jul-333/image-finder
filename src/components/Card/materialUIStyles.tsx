import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 260,
      maxWidth: 345,
      width: "100%",
      margin: "10px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#8080801f",
      transition: "all .2s ease-in-out",
      "&:hover": {
        boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.4)",
        transform: "scale(1.025)",
      },
    },
    title: {
      margin: "20px 3px 0 3px",
      fontSize: 16,
      fontWeight: 700,
      textAlign: "center",
    },
    media: {
      height: 180,
      width: 275,
      marginTop: 15,
    },
    inputContainer: {
      width: "93%",
      padding: "0 5px",
      margin: "20px auto 0 auto;",
      background: theme.palette.secondary.light,
    },
    button: {
      margin: "10px auto 20px auto",
      width: 135,
      height: 32,
      color: theme.palette.secondary.light,
    },
  })
);
