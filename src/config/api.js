const BASE_URL = "https://komiku-api.fly.dev/api/comic";

const API_URL = {
  popular: `${BASE_URL}/popular/page/1`,
  recommended: `${BASE_URL}/recommended/page/1`,
  latest: `${BASE_URL}/newest/page/1`,
  detail: `${BASE_URL}/info`, // + endpoint
  search: `${BASE_URL}/search`, // + /query
  chapterDetail: `${BASE_URL}/chapter`, // + endpoint

  //List
  list: `${BASE_URL}/list`,
  mangaList: `${BASE_URL}/list?filter=manga`,
  manghuaList: `${BASE_URL}/list?filter=manhua`,
  manghwaList: `${BASE_URL}/list?filter=manhwa`,
};

export default API_URL;
