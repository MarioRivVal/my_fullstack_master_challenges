const API_URL = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const STORAGE_KEY_1 = "unsplash_images_group_1";
const STORAGE_KEY_2 = "unsplash_images_group_2";
const STORAGE_EXPIRATION_KEY = "unsplash_images_expiration";
const EXPIRATION_TIME = 24 * 60 * 60 * 1000;

// Obtiene imágenes de Unsplash o localStorage
export const fetchAndStoreImages = async (count, groupNum) => {
  const imgGroup = groupNum === 1 ? STORAGE_KEY_1 : STORAGE_KEY_2;

  if (!isDataExpired() && localStorage.getItem(imgGroup)) {
    console.log("Cargando imágenes desde localStorage...");
    return JSON.parse(localStorage.getItem(imgGroup));
  }

  console.log("Haciendo solicitud a Unsplash...");
  try {
    const response = await fetch(
      `${API_URL}/photos/random?count=${count}&client_id=${ACCESS_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Error al obtener imágenes: ${response.status}`);
    }

    const data = await response.json();

    const images = data.map((el) => el.urls.small);
    console.log(images); //  CONSO

    localStorage.setItem(imgGroup, JSON.stringify(images));
    localStorage.setItem(STORAGE_EXPIRATION_KEY, Date.now() + EXPIRATION_TIME);
    return images;
  } catch (error) {
    console.error("Error en fetchAndStoreImages:", error);
    return [];
  }
};

// ----------------------------

const isDataExpired = () => {
  const expiration = localStorage.getItem(STORAGE_EXPIRATION_KEY);
  return !expiration || Date.now() > parseInt(expiration, 10);
};

export const splitImages = (images, groupSize) => {
  const groups = [];
  for (let i = 0; i < images.length; i += groupSize) {
    groups.push(images.slice(i, i + groupSize));
  }
  return groups;
};
