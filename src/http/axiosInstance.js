import axios from "axios";

const API = axios.create({
  baseURL:
    "https://2036-2407-5200-405-6367-d143-a2b9-6036-f3fe.ngrok-free.app/",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default API;
