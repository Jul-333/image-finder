import React, { useState, FC } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./materialUIStyles";
import imageNotFound from "../../images/image-not-found.jpg";
import {
  bookmarksManager,
  deleteBookmarkWrapper,
} from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { ImagesType } from "../../redux/typesTS";

type OwnPropsType = {
  image: ImagesType,
}

const CardElement: FC<OwnPropsType> = ({ image }) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [value, setValue] = useState("");
  const isBookmarksGallery: boolean = window.location.pathname === "/bookmarks";
  const colorButton: string = image.isBookmark ? "gray" : "#f10f0f";

  const actionBookmark = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string | undefined, isBookmark: boolean) => {
    event.preventDefault();
    if (!isBookmarksGallery) {
      isBookmark
        ? dispatch(bookmarksManager("delete", id, isBookmark))
        : dispatch(bookmarksManager("add", id, isBookmark, value));
    } else {
      dispatch(deleteBookmarkWrapper(id));
    }
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
          onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setValue(event.target.value);
          }}
          value={value}
        />
      )}
      <Button
        size="small"
        style={{ background: colorButton }}
        className={classes.button}
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => actionBookmark(event, image.id, image.isBookmark)}
      >
        {image.isBookmark ? "Remove it" : "Bookmark it!"}
      </Button>
    </Card>
  );
};

export default CardElement;
