export const BASE_URL = "https://api.jikan.moe/v4";

const API_URL = {
  topComic: `${BASE_URL}/manga?limit=10`,
  topManga: `${BASE_URL}/top/manga?type=manga&limit=12`,
  topManhua: `${BASE_URL}/top/manga?type=manhua&limit=12`,
  topManhwa: `${BASE_URL}/top/manga?type=manhwa&limit=12`,
  defaultSearch: `${BASE_URL}/top/manga?limit=24`,
  search: `${BASE_URL}/manga?q=`, // +query
};

export default API_URL;
