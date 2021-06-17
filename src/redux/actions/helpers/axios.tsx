import axios from "axios";

export const axiosHelper = (url: string) => {
  return axios.get(url).then((response) => {
    const { photo: arrImages, pages: numberOfPages } = response.data.photos;
    if (!arrImages.length) {
      throw new Error("Not found images");
    }
    return [arrImages, numberOfPages];
  });
};
