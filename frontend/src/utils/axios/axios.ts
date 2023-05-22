import axios from "axios";
import { localIP, token } from "../utils";

const axioS = axios.create({
  baseURL: `http://${localIP}:1337`
})

axioS.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axioS;