import axios from "axios";

const API = axios.create({
  baseURL: "https://72b9-2407-5200-400-4770-9a6-2f66-1f62-705c.ngrok-free.app/",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default API;
