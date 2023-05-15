import Strapi from 'strapi-sdk-js';

let localIP: string = '10.0.84.201';

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
      Authorization:
        'c01cc0dcdf8eb07acc6b89d740059ccbd4e98328f6b64951c8ae7655a9e4c60f2fc07db896778a53a9544dd5dc19c543b9e37c0e57ccbbc514cef12b0373affbe9292acacb29b9b79fd7835953517a0d4d5c6996bc02cfdd3a2f300875b8f336446e99dde84a08d1a1ea7f5439ed787a0f1773e1482ae9909280da2666136432',
      'Content-Type': 'application/json',
    },
  },
});

export default strapi;
