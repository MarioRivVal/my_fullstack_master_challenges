import { printMessage } from "../../utils/printMessage";

const API_URL = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const STORAGE_KEY_1 = "unsplash_images_group_1";
const STORAGE_KEY_2 = "unsplash_images_group_2";
const STORAGE_EXPIRATION_KEY = "unsplash_images_expiration";
const EXPIRATION_TIME = 24 * 60 * 60 * 1000;

export const fetchImages = async (count, groupNum) => {
  const imgGroup = groupNum === 1 ? STORAGE_KEY_1 : STORAGE_KEY_2;

  const localStorageImgs = loadImagesFromLocalStorage(imgGroup);

  if (localStorageImgs) {
    return localStorageImgs;
  } else {
    console.log("Making a request to Unsplash...");
    try {
      const response = await fetch(
        `${API_URL}/photos/random?count=${count}&client_id=${ACCESS_KEY}`
      );
      if (!response.ok) {
        throw new Error(`Error al obtener imágenes: ${response.status}`);
      }

      const data = await response.json();
      const images = data.map((el) => el.urls.small);
      saveImagesToLocalStorage(imgGroup, images);
      return images;
    } catch (error) {
      console.error("Error en fetchImages:", error);
      return [];
    }
  }
};

// ----------------------------
export const fetchCategoryImage = async (category) => {
  const localStorageImgs = loadImagesFromLocalStorage(`${category}Images`);

  if (localStorageImgs) {
    return localStorageImgs;
  } else {
    try {
      console.log(
        `Searching for images for the category on Unsplash: ${category}`
      );
      const response = await fetch(
        `${API_URL}/search/photos?query=${category}&per_page=30&client_id=${ACCESS_KEY}`
      );

      if (!response.ok) {
        throw new Error(
          `Error searching for images for the category: ${response.status}`
        );
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const images = data.results.map((el) => el.urls.small);

        saveImagesToLocalStorage(`${category}Images`, images);

        return images;
      } else {
        printMessage(`Any image for ${category}`);
      }
    } catch (error) {
      console.error(`Error en fetchCategoryImage para ${category}:`, error);
    }
  }
};

// ----------------------------
const isDataExpired = () => {
  const expiration = localStorage.getItem(STORAGE_EXPIRATION_KEY);
  return !expiration || Date.now() > parseInt(expiration, 10);
};

// -------------------------------
export const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

// -------------------------------
export const loadImagesFromLocalStorage = (localStorageNameList) => {
  if (!isDataExpired() && localStorage.getItem(localStorageNameList)) {
    console.log("Loading images from local storage...");
    return JSON.parse(localStorage.getItem(localStorageNameList));
  }
};
// -------------------------------
export const saveImagesToLocalStorage = (localStorageNameList, images) => {
  localStorage.setItem(localStorageNameList, JSON.stringify(images));
  localStorage.setItem(STORAGE_EXPIRATION_KEY, Date.now() + EXPIRATION_TIME);
};
