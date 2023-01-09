import axios from "axios";

const instance = axios.create({
  baseURL: "...", //the API Cloud function URL
}); 

export default instance;
