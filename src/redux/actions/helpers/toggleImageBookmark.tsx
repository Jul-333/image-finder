import { ImagesType } from "../../typesTS";

export const toggleImageBookmark = (images: Array<ImagesType>, isBookmarkValue: boolean, id: string | undefined
): Array<ImagesType> => {
  return images.map((item) => {
    if (item.id === id) {
      item.isBookmark = !isBookmarkValue;
    }
    return item;
  });
};
