import {
  ADD_IMAGES_SEARCH,
  CLEAR_IMAGES_SEARCH,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  LOADER,
  ERROR,
  SET_CURRENT_PAGE,
  SET_NUMBER_OF_PAGES,
  GET_IMAGES_ASYNC,
  DELETE_BOOKMARK_SAGA,
  ADD_BOOKMARK_SAGA,
} from "../types";

export const showLoader = (loading) => {
  return {
    type: LOADER,
    payload: loading,
  };
};

export const showError = (error) => {
  return {
    type: ERROR,
    payload: error,
  };
};

export const addImages = (images) => {
  return {
    type: ADD_IMAGES_SEARCH,
    payload: images,
  };
};

export const clearImages = () => {
  return {
    type: CLEAR_IMAGES_SEARCH,
    payload: [],
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};

export const setNumberOfPages = (numberOfPages) => {
  return {
    type: SET_NUMBER_OF_PAGES,
    payload: numberOfPages,
  };
};

export const addBookmark = (bookmark) => {
  return {
    type: ADD_BOOKMARK,
    payload: bookmark,
  };
};

export const deleteBookmark = (bookmarkArr) => {
  return {
    type: DELETE_BOOKMARK,
    payload: bookmarkArr,
  };
};

export const getImages = (tagsValue) => {
  return {
    type: GET_IMAGES_ASYNC,
    tagsValue,
  };
};

export const deleteBookmarkSaga = (id, isBookmark) => {
  return {
    type: DELETE_BOOKMARK_SAGA,
    id,
    isBookmark,
  };
};

export const addBookmarkSaga = (id, isBookmark, valueUserTags) => {
  return {
    type: ADD_BOOKMARK_SAGA,
    id,
    isBookmark,
    valueUserTags,
  };
};

// export const addBookmarkSaga =
//   (id, isBookmark, valueUserTags) => async (dispatch, getState) => {
//     const { images } = getState();
//     // change arrImages
//     const filterArrImages = toggleImageBookmark(images, isBookmark, id);

//     const bookmarkObj = filterArrImages.find((item) => item.id === id);
//     dispatch(
//       addBookmark([
//         {
//           ...bookmarkObj,
//           tags: valueUserTags ? valueUserTags : "No tags",
//         },
//       ])
//     );
//     dispatch(addImages(filterArrImages));
//   };

// export const getImages = (value) => async (dispatch, getState) => {
//   const { currentPage, bookmarks } = getState();
//   const url = `${FLICKER.url}&api_key=${FLICKER.key}&tags=${value}&${FLICKER.options}&page=${currentPage}`;
//   dispatch(showLoader(true));
//   try {
//     const [arrImages, numberOfPages] = await axiosHelper(url);
//     const resultTransformImages = await transformArrImages(
//       arrImages,
//       bookmarks
//     );
//     dispatch(addImages(resultTransformImages));
//     dispatch(setNumberOfPages(numberOfPages));
//   } catch (error) {
//     dispatch(showError(error.message));
//   } finally {
//     dispatch(showLoader(false));
//   }
// };

// export const getImages = (value) => async (dispatch, getState) => {
//   const { currentPage, bookmarks } = getState();
//   const url = `${FLICKER.url}&api_key=${FLICKER.key}&tags=${value}&${FLICKER.options}&page=${currentPage}`;
//   dispatch(showLoader(true));
//   try {
//     const [arrImages, numberOfPages] = await axiosHelper(url);
//     const resultTransformImages = await transformArrImages(
//       arrImages,
//       bookmarks
//     );
//     dispatch(addImages(resultTransformImages));
//     dispatch(setNumberOfPages(numberOfPages));
//   } catch (error) {
//     dispatch(showError(error.message));
//   } finally {
//     dispatch(showLoader(false));
//   }
// };
