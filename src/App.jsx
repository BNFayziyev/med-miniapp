import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

function App() {
  const [materials, setMaterials] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    WebApp.ready();
    setUser(WebApp.initDataUnsafe.user); // Foydalanuvchini aniqlaymiz

    fetch("https://med-backend-cnt6.onrender.com/materials")
      .then((res) => res.json())
      .then((data) => setMaterials(data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {user && (
        <h2>Assalomu alaykum, {user.first_name}!</h2>
      )}

      <h1>📚 Materiallar ro'yxati</h1>
      {materials.length === 0 ? (
        <p>⏳ Yuklanmoqda yoki materiallar mavjud emas.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {materials.map((m) => (
            <li
              key={m.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                marginBottom: "15px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <p><strong>📎 Nomi:</strong> {m.file_name}</p>
              <p><strong>📁 Hajmi:</strong> {m.file_size} KB</p>
              <p><strong>🧷 Format:</strong> {m.file_format}</p>
              <p><strong>🏷️ Hashtaglar:</strong> {m.hashtags}</p>
              <p><strong>📝 Tavsif:</strong> {m.description}</p>
              <a href={m.channel_link} target="_blank" rel="noreferrer">
                🔗 Kanalda ko‘rish
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
