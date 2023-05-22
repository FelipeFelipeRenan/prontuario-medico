import Strapi from 'strapi-sdk-js';
import { localIP, token } from "../utils";

const strapi = new Strapi({
  url: `http://${localIP}:1337`,
  prefix: '/api',
  store: {
    key: 'strapi_jwt',
    useLocalStorage: false,
    cookieOptions: {path: '/'},
  },
  axiosOptions: {
    headers: {
      Authorization: `Bearer  ${token}`,
      'Content-Type': 'application/json',
    },
  },
});

export default strapi;
