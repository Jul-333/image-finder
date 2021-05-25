import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      marginBottom: 15,
      width: "100%",
    },
    input: {
      marginLeft: theme.spacing(1),
      width: "100%",
    },
  })
);
