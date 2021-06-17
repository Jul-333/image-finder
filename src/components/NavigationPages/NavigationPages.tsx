import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./materialUIStyles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { InitialStateType } from "../../redux/reducer";
import { setCurrentPage } from "../../redux/actions/actions";

export const NavigationPages: FC = () => {
  const numberOfPages = useSelector((state: InitialStateType) => state.numberOfPages)
  const currentPage = useSelector((state: InitialStateType) => state.currentPage)
  const dispatch = useDispatch()
  const classes = useStyles();
  const disabledBtnBack = currentPage === 1;
  const disabledBtnForward = currentPage === numberOfPages;

  const handlePage = (action: string) => {
    if (action === "back") {
      dispatch(setCurrentPage(currentPage - 1));
    } else {
      dispatch(setCurrentPage(currentPage + 1));
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

export default NavigationPages;
