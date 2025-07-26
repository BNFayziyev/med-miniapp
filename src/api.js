import axios from 'axios';

const API_URL = "http://localhost:8000/api/materials"; // Agar VPS bo‘lsa, domenni yozing

export async function fetchMaterials(filters = {}) {
  try {
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}
