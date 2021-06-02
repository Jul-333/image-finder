export const setLocalStorage = (bookmarks) => {
  const bookmarksJson = JSON.stringify(bookmarks);
  localStorage.setItem("bookmarks", bookmarksJson);
};

export const getLocalStorage = () => {
  const bookmarksJSON = localStorage.getItem("bookmarks");
  return bookmarksJSON ? JSON.parse(bookmarksJSON) : null;
};
