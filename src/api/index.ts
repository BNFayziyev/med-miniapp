import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000", // localhost API manzilingiz
});

export const fetchMaterials = () => API.get("/materials");
