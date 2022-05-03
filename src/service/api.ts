import axios from 'axios';

const api = axios.create({
  baseURL: 'api url here',
});

export default api;
