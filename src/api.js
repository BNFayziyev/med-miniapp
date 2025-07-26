const API_BASE_URL = "http://127.0.0.1:8000"; // lokalda ishlatyapmiz

export async function fetchMaterials() {
  const response = await fetch(`${API_BASE_URL}/materials`);
  if (!response.ok) {
    throw new Error("Ma'lumotlarni yuklashda xatolik");
  }
  return response.json();
}
