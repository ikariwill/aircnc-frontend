import axios from 'axios';

const api = axios.create({
  baseURL: 'http://1045aacb.ngrok.io',
});

export default api;
