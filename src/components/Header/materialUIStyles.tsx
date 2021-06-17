import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h4: {
      fontWeight: "bold",
      color: "#fff",
    },
  })
);
