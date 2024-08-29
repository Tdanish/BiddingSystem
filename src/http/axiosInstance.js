import axios from "axios";

const API = axios.create({
  baseURL: "https://9918-2407-5200-405-d44f-d70-431b-bbd0-cb10.ngrok-free.app/",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default API;
