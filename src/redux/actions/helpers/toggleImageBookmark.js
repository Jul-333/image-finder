export const toggleImageBookmark = (images, isBookmarkValue, id) => {
  return images.map((item, indx) => {
    if (item.id === id) {
      item.isBookmark = !isBookmarkValue;
    }
    return item;
  });
};
