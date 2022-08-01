export const BASE_URL = "https://api.jikan.moe/v4";

const API_URL = {
  topComic: `${BASE_URL}/manga?limit=10`,
  topManga: `${BASE_URL}/top/manga?type=manga&limit=12`,
  topManhua: `${BASE_URL}/top/manga?type=manhua&limit=12`,
  topManhwa: `${BASE_URL}/top/manga?type=manhwa&limit=12`,
  search: `${BASE_URL}/manga?q=`, // + query
  manga: `${BASE_URL}/manga/id/full`, // + id
  characters: `${BASE_URL}/manga/id/characters`, // + id
  recommendations: `${BASE_URL}/manga/id/recommendations`, // + id
  reviews: `${BASE_URL}/manga/id/reviews`, // + id
};

export default API_URL;
