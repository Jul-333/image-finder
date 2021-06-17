import React from "react";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import "./Header.css";
import { useStyles } from "./materialUIStyles";

const Header = () => {
  const classes = useStyles();
  return (
    <header className="header">
      <Typography variant="h4" component="h1" className={classes.h4}>
        Image Finder
      </Typography>
      <button className="user-auth-btn" type="button">
        <PersonIcon style={{ color: "#757575", fontSize: "33px" }} />
      </button>
    </header>
  );
};
export default Header;
