import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardGallery from "../../components/CardGallery/CardGallery";
import Form from "../../components/Form/Form";
import LoaderElement from "../../components/Loader/Loader";
import NavigationPages from "../../components/NavigationPages/NavigationPages";
import { clearImages, showError } from "../../redux/actions/actions";
import { InitialStateType } from "../../redux/reducer";

const SearchPage: FC = () => {
  const dispatch = useDispatch()
  const images = useSelector((state: InitialStateType) => state.images)
  const loading = useSelector((state: InitialStateType) => state.loading)
  const error = useSelector((state: InitialStateType) => state.error)

  useEffect(() => {
    return () => {
      dispatch(clearImages());
      dispatch(showError(null));
    };
  }, [dispatch]);

  const haveImages = images.length !== 0;
  const showImages = !error && haveImages;
  const showCommonInfo = !loading && !error && !haveImages;

  return (
    <div className="page-block">
      <Form />
      {loading && <LoaderElement />}

      {showCommonInfo && (
        <p className="message-info">
          No images here. Would you try to search for anything else?
        </p>
      )}

      {!showImages ? (
        <p className="message-info">{error}</p>
      ) : (
        <>
          <NavigationPages />
          <CardGallery images={images} />
        </>
      )}
    </div>
  );
};

export default SearchPage;
