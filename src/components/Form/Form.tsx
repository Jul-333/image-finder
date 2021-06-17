import React, { useState, useEffect, FC } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import useDebounce from "../../utils/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { getImages, clearImages } from "../../redux/actions/actions";
import { useStyles } from "./materialUIStyles";
import { InitialStateType } from "../../redux/reducer";

const Form: FC = () => {
  const currentPage = useSelector((state: InitialStateType) => state.currentPage)
  const dispatch = useDispatch()
  const classes = useStyles();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  useEffect(() => {
    dispatch(clearImages());
    if (value.trim() !== "") {
      dispatch(getImages(value));
    }
  }, [dispatch, debouncedValue, currentPage]);

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

export default Form;
