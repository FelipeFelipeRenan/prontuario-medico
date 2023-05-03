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
        'Bearer 1f7d14e786aba9f0ac7b4df1838d53e1134b85f13b5158281bef8bea3bd9225efd1a034a6bed840b869f2bb64ba701728def7df40fb4bc9065173487a47bb0973866cbceb1963c776611e23eacbca1438ead045822cfcd2b9cac229821bb9a0cb07616c7539bc2715d9e5c66fd38cab2e0020472078fc8bcba78daae36eaf0ee',
      'Content-Type': 'application/json',
    },
  },
});

export default strapi;
