export const toggleImageBookmark = (images, isBookmark, id) => {
  const bookmarkIndex = images.findIndex((item) => item.id === id);
  const newImagesArr = [...images];
  newImagesArr[bookmarkIndex].isBookmark = !isBookmark;
  return newImagesArr;
};
