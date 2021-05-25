const transformArrImages = (arr, bookmarks) => {
  return arr.map((item) => {
    const title = item.title;
    const cutTitle =
      title && title.length > 30 ? title.slice(0, 30) + "..." : title;
      
    const findBookmark = bookmarks.findIndex((bookmark) => {
      return bookmark.id === item.id;
    });

    const imageObj = {
      id: item.id,
      title: cutTitle,
      url: item.url_c,
      isBookmark: findBookmark === -1 ? false : true,
    };

    return imageObj;
  });
};

export default transformArrImages;
