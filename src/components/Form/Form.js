import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import useDebounce from "../../utils/useDebounce";
import { connect } from "react-redux";
import { getImages, clearImages } from "../../redux/actions/actions";
import { useStyles } from "./materialUIStyles";

const Form = ({ getImages, clearImages, currentPage }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  useEffect(() => {
    clearImages();
    if (value.trim() !== "") {
      getImages(value);
      
    }
  }, [debouncedValue, currentPage]);

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Find images"
        inputProps={{ "aria-label": "Find images" }}
        autoFocus={true}
        onChange={handleChange}
        value={value}
        error
      />
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
});

const mapDispatchToProps = {
  getImages,
  clearImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
