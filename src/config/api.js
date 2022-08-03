export const BASE_URL = "https://api.jikan.moe/v4";

const API_URL = {
  topComic: `${BASE_URL}/manga?limit=10`,
  topManga: `${BASE_URL}/top/manga?type=manga&limit=12`,
  mangaList: `${BASE_URL}/top/manga?type=manga&limit=24`,
  topManhua: `${BASE_URL}/top/manga?type=manhua&limit=12`,
  manhuaList: `${BASE_URL}/top/manga?type=manhua&limit=24`,
  topManhwa: `${BASE_URL}/top/manga?type=manhwa&limit=12`,
  manhwaList: `${BASE_URL}/top/manga?type=manhwa&limit=24`,
  defaultSearch: `${BASE_URL}/top/manga?limit=24`,
  search: `${BASE_URL}/manga?q=`, // +query
};

export default API_URL;
