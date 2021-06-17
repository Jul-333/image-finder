import { FLICKER } from "../../config";
import transformArrImages from "./helpers/transformArrImages";
import { axiosHelper } from "./helpers/axios";
import { toggleImageBookmark } from "./helpers/toggleImageBookmark";
import { ImagesType } from "../typesTS";
import { InitialStateType } from '../reducer'
import { ThunkAction } from "redux-thunk";
import { InferActionsTypes } from "../..";


export const actions = {
  showLoader: (loading: boolean) => ({ type: "LOADER", payload: loading } as const),
  showError: (error: null | string) => ({ type: "ERROR", payload: error } as const),
  addImages: (images: Array<ImagesType>) => ({ type: "ADD_IMAGES_SEARCH", payload: images } as const),
  clearImages: () => ({ type: "CLEAR_IMAGES_SEARCH", payload: [] } as const),
  setCurrentPage: (currentPage: number) => ({ type: "SET_CURRENT_PAGE", payload: currentPage } as const),
  setNumberOfPages: (numberOfPages: null | number) => ({ type: "SET_NUMBER_OF_PAGES", payload: numberOfPages } as const),
  addBookmark: (bookmark: Array<ImagesType>) => ({ type: "ADD_BOOKMARK", payload: bookmark } as const),
  deleteBookmark: (bookmarkArr: Array<ImagesType>) => ({ type: "DELETE_BOOKMARK", payload: bookmarkArr } as const)
}
export const { showLoader,
  showError,
  addImages,
  clearImages,
  setCurrentPage,
  setNumberOfPages,
  addBookmark,
  deleteBookmark } = actions;

export type ActionsType = InferActionsTypes<typeof actions>

type ThunkType = ThunkAction<Promise<void>, InitialStateType, unknown, ActionsType>


export const deleteBookmarkWrapper = (id: string | undefined): ThunkType =>
  async (dispatch, getState) => {
    const { bookmarks } = getState();
    const bookmarkArr = [...bookmarks].filter((item) => item.id !== id);
    dispatch(actions.deleteBookmark(bookmarkArr));
  };

// Manager for search page
export const bookmarksManager =
  (flag: string, id: string | undefined, isBookmark: boolean, valueUserTags?: string): ThunkType =>
    async (dispatch, getState) => {
      const { images } = getState();

      // change arrImages
      const newImagesArr = toggleImageBookmark(images, isBookmark, id);

      // change bookmarks
      if (flag === "delete") {
        dispatch(deleteBookmarkWrapper(id));
      }
      if (flag === "add") {
        const bookmarkObj = newImagesArr.find((item) => item.id === id)!;
        dispatch(
          actions.addBookmark([{
            ...bookmarkObj, tags: valueUserTags ? valueUserTags : "No tags"
          }])
        );
      }

      dispatch(actions.addImages(newImagesArr));
    };

export const getImages = (value: string): ThunkType =>
  async (dispatch, getState) => {
    const { currentPage, bookmarks } = getState();
    const url = `${FLICKER.url}&api_key=${FLICKER.key}&tags=${value}&${FLICKER.options}&page=${currentPage}`;
    dispatch(actions.showLoader(true));
    try {
      const [arrImages, numberOfPages] = await axiosHelper(url);
      const resultTransformImages: Array<ImagesType> = await transformArrImages(
        arrImages,
        bookmarks
      );
      dispatch(actions.addImages(resultTransformImages));
      dispatch(actions.setNumberOfPages(numberOfPages));
    } catch (error) {
      dispatch(actions.showError(error.message));
    } finally {
      dispatch(actions.showLoader(false));
    }
  };



  // type ShowLoaderType = {
  //   type: typeof LOADER ,
  //   payload: boolean
  // } as const
  // type ShowErrorType = {
  //   type: typeof ERROR,
  //   payload: null | string
  // }
  // type AddImagesType = {
  //   type: typeof ADD_IMAGES_SEARCH,
  //   payload: Array<ImagesType>,
  // }
  // type ClearImagesType = {
  //   type: typeof CLEAR_IMAGES_SEARCH,
  //   payload: []
  // }
  // type SetCurrentPageType = {
  //   type: typeof SET_CURRENT_PAGE,
  //   payload: number,
  // }
  // type SetNumberOfPagesType = {
  //   type: typeof SET_NUMBER_OF_PAGES,
  //   payload: null | number,
  // }
  // type AddBookmarkType = {
  //   type: typeof ADD_BOOKMARK,
  //   payload: Array<ImagesType> | [],
  // }
  // type DeleteBookmarkType = {
  //   type: typeof DELETE_BOOKMARK,
  //   payload: Array<ImagesType>
  // }