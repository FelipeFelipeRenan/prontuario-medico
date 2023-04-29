import Strapi from "strapi-sdk-js";
// http://192.168.1.17:1337/api/auth/local
const strapi = new Strapi({
  url: "http://192.168.1.17:1337",
  prefix: "/api",
  store: {
    key: "strapi_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
  axiosOptions: {},
});

export default strapi;