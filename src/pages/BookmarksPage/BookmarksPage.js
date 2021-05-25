import React from "react";
import { connect } from "react-redux";
import CardGallery from "../../components/CardGallery/CardGallery";

const BookmarksPage = ({ bookmarks }) => {
  const haveBookmarks =  bookmarks.length !== 0;

  return (
    <div className="page-block">
      {haveBookmarks ? (
        <CardGallery images={bookmarks} />
      ) : (
        <p className="message-info">You haven’t added a bookmark yet.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks,
});

export default connect(mapStateToProps, null)(BookmarksPage);
