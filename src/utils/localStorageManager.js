export const localStorageManager = (bookmarks) => {
  if (bookmarks.length === 0) {
    return localStorage.clear();
  }
  const bookmarksJson = JSON.stringify(bookmarks);
  localStorage.setItem("bookmarks", bookmarksJson);
};
