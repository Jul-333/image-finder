
import { ActionsType } from "./actions/actions";
import { ImagesType } from "./typesTS";

const initialState = {
  images: [] as Array<ImagesType>|[] ,
  bookmarks: [] as Array<ImagesType> | [],
  numberOfPages: null as number | null,
  currentPage: 1,
  loading: false,
  error: null as string | null,
};

export type InitialStateType = typeof initialState;

export default function imageReducer(state = initialState, action: ActionsType): InitialStateType {
  switch (action.type) {
    case "ADD_IMAGES_SEARCH":
      return {
        ...state,
        images: [...action.payload],
        error: null,
      };
    case "CLEAR_IMAGES_SEARCH":
      return {
        ...state,
        images: [...action.payload],
        error: null,
      };
    case "ADD_BOOKMARK":
      return {
        ...state,
        bookmarks: [...state.bookmarks, ...action.payload],
      };

    case "DELETE_BOOKMARK":
      return {
        ...state,
        bookmarks: [...action.payload],
      };

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_NUMBER_OF_PAGES":
      return {
        ...state,
        numberOfPages: action.payload,
      };
    case "LOADER":
      return {
        ...state,
        loading: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
