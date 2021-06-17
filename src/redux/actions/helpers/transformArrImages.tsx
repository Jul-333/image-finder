import { ImagesType } from "../../typesTS";

const transformArrImages = (arr: any, bookmarks: Array<ImagesType> | []): Array<ImagesType> => {
  return arr.map((item: any) => {
    const title = item.title;
    const cutTitle =
      title && title.length > 30 ? title.slice(0, 30) + "..." : title;


    const findBookmark = bookmarks.find((bookmark) => {
      return bookmark.id === item.id;
    });

    const imageObj = {
      id: item.id,
      title: cutTitle,
      url: item.url_c,
      isBookmark: !findBookmark ? false : true,
      tags: !findBookmark ? "No tags" : findBookmark.tags
    };

    return imageObj;
  });
};

export default transformArrImages;
