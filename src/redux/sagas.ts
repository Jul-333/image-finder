import { SagaIterator } from '@redux-saga/core';
import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { FLICKER } from "../config";
import transformArrImages from "./actions/helpers/transformArrImages";
import { axiosHelper } from "./actions/helpers/axios";
import { toggleImageBookmark } from "./actions/helpers/toggleImageBookmark";
import {
    actionsSaga,
    addBookmark,
    addImages,
    deleteBookmark,
    setNumberOfPages,
    showError,
    showLoader,
    ADD_BOOKMARK_SAGA,
    DELETE_BOOKMARK_SAGA,
    GET_IMAGES_ASYNC,
} from "./actions/actions";

export type getImagesCallSagaType = ReturnType<typeof actionsSaga.getImagesCallSaga>;
export type deleteBookmarkCallSagaType = ReturnType<typeof actionsSaga.deleteBookmarkCallSaga>;
export type addBookmarkCallSagaType = ReturnType<typeof actionsSaga.addBookmarkCallSaga>;

function* getImagesSaga(action: getImagesCallSagaType): SagaIterator {
    const { tagsValue } = action;
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

function* deleteBookmarkSaga(action: deleteBookmarkCallSagaType): SagaIterator {
    const { isBookmark, id } = action
    const { bookmarks, images } = yield select();
    const bookmarkArr = [...bookmarks].filter((item) => item.id !== id);
    yield put(deleteBookmark(bookmarkArr));
    if (images.length) {
        const filterArrImages = toggleImageBookmark(images, isBookmark, id);
        yield put(addImages(filterArrImages));
    }
}

function* addBookmarkSaga(action: addBookmarkCallSagaType): SagaIterator {
    const { isBookmark, id, valueUserTags } = action
    const { images } = yield select();
    const filterArrImages = toggleImageBookmark(images, isBookmark, id);
    const bookmarkObj = filterArrImages.find((item) => item.id === id)!;
    yield put(addBookmark([{ ...bookmarkObj, tags: valueUserTags ? valueUserTags : "No tags" }]));
    yield put(addImages(filterArrImages));
}

export function* rootSaga() {
    yield all([
        takeEvery(GET_IMAGES_ASYNC, getImagesSaga),
        takeEvery(DELETE_BOOKMARK_SAGA, deleteBookmarkSaga),
        takeEvery(ADD_BOOKMARK_SAGA, addBookmarkSaga),
    ]);
}
