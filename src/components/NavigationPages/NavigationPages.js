import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useStyles } from "./materialUIStyles";
import { connect } from "react-redux";
import { setCurrentPage } from "../../redux/actions/actions";

export const NavigationPages = ({
  numberOfPages,
  currentPage,
  setCurrentPage,
}) => {
  const classes = useStyles();
  const disabledBtnBack = currentPage === 1;
  const disabledBtnForward = currentPage === numberOfPages;

  const handlePage = (action) => {
    if (action === "back") {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={classes.root}>
      <ButtonGroup aria-label="outlined primary button group">
        <Button
          className={classes.button}
          startIcon={<ArrowBackIosIcon />}
          disabled={disabledBtnBack}
          onClick={() => handlePage("back")}
        >
          Back
        </Button>
        <Button
          style={{ color: "gray", textTransform: "capitalize" }}
          disabled={true}
        >
          ...Page {currentPage} of {numberOfPages}...
        </Button>
        <Button
          className={classes.button}
          endIcon={<ArrowForwardIosIcon />}
          disabled={disabledBtnForward}
          onClick={() => handlePage("forward")}
        >
          Forward
        </Button>
      </ButtonGroup>
    </div>
  );
};
const mapStateToProps = (state) => ({
  numberOfPages: state.numberOfPages,
  currentPage: state.currentPage,
});

const mapDispatchToProps = {
  setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationPages);
