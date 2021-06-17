import { FC } from "react";
import { useSelector } from "react-redux";
import CardGallery from "../../components/CardGallery/CardGallery";
import { InitialStateType } from "../../redux/reducer";

const BookmarksPage: FC = () => {
  const bookmarks = useSelector((state: InitialStateType) => state.bookmarks)
  const haveBookmarks: boolean = bookmarks.length !== 0;

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

export default BookmarksPage;
