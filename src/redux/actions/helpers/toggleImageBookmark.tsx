import { ImagesType } from "../../typesTS";

export const toggleImageBookmark = (images: Array<ImagesType>, isBookmark: boolean, id: string | undefined): Array<ImagesType> => {
  const bookmarkIndex = images.findIndex((item) => item.id === id);
  const newImagesArr = [...images];
  newImagesArr[bookmarkIndex].isBookmark = !isBookmark;
  return newImagesArr;
};
