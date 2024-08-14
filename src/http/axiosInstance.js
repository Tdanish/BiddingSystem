import axios from "axios";

const API = axios.create({
  baseURL: "https://7ea9-2407-5200-400-698-7d56-572d-7c44-145.ngrok-free.app/",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default API;
