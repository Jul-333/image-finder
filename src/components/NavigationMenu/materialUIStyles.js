import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 60,
    height: 95,
    backgroundColor: theme.palette.primary.main,
  },
  tab: {
    width: "60px",
    minWidth: "60px",
  },
  divider: {
    height: 1,
    margin: 4,
  },
}));
