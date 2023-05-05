import Strapi from 'strapi-sdk-js';

let localIP: string = '192.168.1.17';

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
      Authorization: 'Bearer 80d98dfdcc9c8c4b7b918e9bd7b56990a771de1ed57837c54739eebfa3a276db010e938665d50092804177e530ed13549ccae6afabe7211a3d004e00e57f55796bbd382998388fe4d433ec2aa3c979b1deff5d8d5c41490538e1e95c8122b05d95e57fc49ba1d47e53c7e990ab75a4abd7f2a48698a89cad7512686ed35a0736',
      'Content-Type': 'application/json',
    },
  },
});

export default strapi;
