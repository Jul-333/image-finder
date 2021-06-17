import { ImagesType } from "../typesTS";
import { InferActionsTypes } from "../..";

export const GET_IMAGES_ASYNC = "GET_IMAGES_ASYNC";
export const DELETE_BOOKMARK_SAGA = "DELETE_BOOKMARK_SAGA";
export const ADD_BOOKMARK_SAGA = "ADD_BOOKMARK_SAGA";

export const actions = {
  showLoader: (loading: boolean) => ({ type: "LOADER", payload: loading } as const),
  showError: (error: null | string) => ({ type: "ERROR", payload: error } as const),
  addImages: (images: Array<ImagesType>) => ({ type: "ADD_IMAGES_SEARCH", payload: images } as const),
  clearImages: () => ({ type: "CLEAR_IMAGES_SEARCH", payload: [] } as const),
  setCurrentPage: (currentPage: number) => ({ type: "SET_CURRENT_PAGE", payload: currentPage } as const),
  setNumberOfPages: (numberOfPages: null | number) => ({ type: "SET_NUMBER_OF_PAGES", payload: numberOfPages } as const),
  addBookmark: (bookmark: Array<ImagesType>) => ({ type: "ADD_BOOKMARK", payload: bookmark } as const),
  deleteBookmark: (bookmarkArr: Array<ImagesType>) => ({ type: "DELETE_BOOKMARK", payload: bookmarkArr } as const),
}

export const actionsSaga = {
  getImagesCallSaga: (tagsValue: string) => ({ type: GET_IMAGES_ASYNC, tagsValue } as const),
  deleteBookmarkCallSaga: (id: string | undefined, isBookmark: boolean) => ({ type: DELETE_BOOKMARK_SAGA, id, isBookmark } as const),
  addBookmarkCallSaga: (id: string | undefined, isBookmark: boolean, valueUserTags: string) => ({
    type: ADD_BOOKMARK_SAGA,
    id, isBookmark, valueUserTags
  } as const)
}

export const { showLoader,
  showError,
  addImages,
  clearImages,
  setCurrentPage,
  setNumberOfPages,
  addBookmark,
  deleteBookmark,
} = actions;

export const {
  getImagesCallSaga,
  deleteBookmarkCallSaga,
  addBookmarkCallSaga
} = actionsSaga

export type ActionsType = InferActionsTypes<typeof actions>
