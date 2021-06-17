import { ImagesType } from "../redux/typesTS";

export const setLocalStorage = (bookmarks: Array<ImagesType>): void => {
  const bookmarksJson = JSON.stringify(bookmarks);
  localStorage.setItem("bookmarks", bookmarksJson);
};

export const getLocalStorage = (): [] | Array<ImagesType> => {
  const bookmarksJSON = localStorage.getItem("bookmarks");
  return bookmarksJSON ? JSON.parse(bookmarksJSON) : [];
};
