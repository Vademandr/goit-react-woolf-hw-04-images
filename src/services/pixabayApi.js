import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '40909869-b3da28e56daa62163d671a2ba';

export const getImages = async (query, page) => {
  const data = await axios(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};