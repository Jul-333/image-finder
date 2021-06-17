import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { FLICKER } from "../config";
import {
  addBookmark,
  addImages,
  deleteBookmark,
  setNumberOfPages,
  showError,
  showLoader,
} from "./actions/actions";
import transformArrImages from "./actions/helpers/transformArrImages";
import {
  ADD_BOOKMARK_SAGA,
  DELETE_BOOKMARK_SAGA,
  GET_IMAGES_ASYNC,
} from "./types";
import { axiosHelper } from "./actions/helpers/axios";
import { toggleImageBookmark } from "./actions/helpers/toggleImageBookmark";

function* getImagesAsync({ tagsValue }) {
  const { currentPage, bookmarks } = yield select();
  const url = `${FLICKER.url}&api_key=${FLICKER.key}&tags=${tagsValue}&${FLICKER.options}&page=${currentPage}`;
  yield put(showLoader(true));
  try {
    const [arrImages, numberOfPages] = yield call(axiosHelper, url);
    const resultTransformImages = transformArrImages(arrImages, bookmarks);
    yield put(addImages(resultTransformImages));
    yield put(setNumberOfPages(numberOfPages));
  } catch (error) {
    yield put(showError(error.message));
  } finally {
    yield put(showLoader(false));
  }
}

function* deleteBookmarkSaga({ id, isBookmark }) {
  const { bookmarks, images } = yield select();
  const bookmarkArr = [...bookmarks].filter((item) => item.id !== id);
  yield put(deleteBookmark(bookmarkArr));

  if (images.length) {
    const filterArrImages = toggleImageBookmark(images, isBookmark, id);
    yield put(addImages(filterArrImages));
  }
}

function* addBookmarkSaga({ id, isBookmark, valueUserTags }) {
  const { images } = yield select();
  const filterArrImages = toggleImageBookmark(images, isBookmark, id);
  const bookmarkObj = filterArrImages.find((item) => item.id === id);
  yield put(
    addBookmark([
      {
        ...bookmarkObj,
        tags: valueUserTags ? valueUserTags : "No tags",
      },
    ])
  );
  yield put(addImages(filterArrImages));
}

export function* rootSaga() {
  yield all([
    takeEvery(GET_IMAGES_ASYNC, getImagesAsync),
    takeEvery(DELETE_BOOKMARK_SAGA, deleteBookmarkSaga),
    takeEvery(ADD_BOOKMARK_SAGA, addBookmarkSaga),
  ]);
}
