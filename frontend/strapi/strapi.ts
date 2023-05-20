import Strapi from 'strapi-sdk-js';

let localIP: string = '192.168.1.17';
let token: string = 'cb3ff6c64d85a03ff2f5e76206a73b9f348570ff71cb4226804510689d0ca47caa969232a688a0bb3a5d14d85bccd20dfeaf6423140d10617314519fcbf56176345ec89207d2a8ab17facccbe330e1046b946c71add7ac6a1ac11a1163ad80691e64451e699cf72d6cee5c9c190749546cbc73a5c44a4d8406baab96fa0a1bd5';

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
