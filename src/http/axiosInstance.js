import axios from "axios";

const API = axios.create({
  baseURL:
    "https://23e6-2407-5200-400-3f2b-a069-f1a0-9192-36fa.ngrok-free.app/",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default API;
