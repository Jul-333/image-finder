import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./materialUIStyles";
import imageNotFound from "../../images/image-not-found.jpg";
import {
  addBookmarkSaga,
  deleteBookmarkSaga,
} from "../../redux/actions/actions";
import { connect } from "react-redux";

const CardElement = ({ image, addBookmarkSaga, deleteBookmarkSaga }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const isBookmarksGallery = !!image.tags;
  const colorButton = image.isBookmark ? "gray" : "#f10f0f";

  const actionBookmark = (event, id, isBookmark) => {
    event.preventDefault();
    // if (!isBookmarksGallery) {
      isBookmark
        ? deleteBookmarkSaga(id,isBookmark)
        : addBookmarkSaga(id, isBookmark, value);
    // } else {
    //   deleteBookmarkThunk(isBookmark, id);
    // }
  };

  return (
    <Card className={classes.root}>
      {!isBookmarksGallery && (
        <Typography variant="h5" component="h1" className={classes.title}>
          {image.title === "" ? "No title" : image.title}
        </Typography>
      )}
      <CardMedia
        className={classes.media}
        image={image.url ? image.url : imageNotFound}
        title={image.title}
      />
      {isBookmarksGallery ? (
        <Typography variant="h6" component="h6" className={classes.title}>
          {image.tags}
        </Typography>
      ) : (
        <InputBase
          className={classes.inputContainer}
          placeholder="Enter tags"
          inputProps={{ "aria-label": "Enter tags", maxLength: 28 }}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
      )}
      <Button
        size="small"
        style={{ background: colorButton }}
        className={classes.button}
        onClick={(event) => actionBookmark(event, image.id, image.isBookmark)}
      >
        {image.isBookmark ? "Remove it" : "Bookmark it!"}
      </Button>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  images: state.images,
});

const mapDispatchToProps = {
  addBookmarkSaga,
  deleteBookmarkSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardElement);
