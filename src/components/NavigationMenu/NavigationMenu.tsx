import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Cloud, Bookmarks } from "@material-ui/icons";
import { useStyles } from "./materialUIStyles";

const NavigationMenu = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(
    window.location.pathname === "/bookmarks" ? 1 : 0
  );

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
          centered={true}
        >
          <Tab
            aria-label="search"
            className={classes.tab}
            component={Link}
            to="/"
            icon={<Cloud />}
          />
          <Tab
            aria-label="bookmarks"
            className={classes.tab}
            component={Link}
            to="/bookmarks"
            icon={<Bookmarks />}
          />
        </Tabs>
      </Paper>
    </div>
  );
};

export default NavigationMenu;
