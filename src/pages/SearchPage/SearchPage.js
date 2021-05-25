import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardGallery from "../../components/CardGallery/CardGallery";
import Form from "../../components/Form/Form";
import LoaderElement from "../../components/Loader/Loader";
import NavigationPages from "../../components/NavigationPages/NavigationPages";
import { clearImages, showError } from "../../redux/actions/actions";

const SearchPage = ({ clearImages, loading, error, images }) => {
  useEffect(() => {
    return () => {
      clearImages();
      showError(null);
    };
  }, []);

  const haveImages = images.length !== 0;
  const showImages = !error && haveImages;
  const showCommonInfo = !loading &&!error && !haveImages;

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

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  images: state.images,
});

const mapDispatchToProps = {
  clearImages,
  showError,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
