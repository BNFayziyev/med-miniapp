import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

function App() {
  const [materials, setMaterials] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    WebApp.ready();

    // ✅ Telegram foydalanuvchi ma'lumotlarini tekshiramiz
    const userData = WebApp.initDataUnsafe?.user;
    console.log("Telegram foydalanuvchi ma'lumotlari:", userData);
    setUser(userData);

    // ✅ Backenddan materiallarni yuklaymiz
    fetch("https://med-backend-cnt6.onrender.com/materials")
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend'dan kelgan materiallar:", data);
        setMaterials(data);
      })
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📚 Med Mini ilovasi</h1>
      <p>Telegram orqali mini ilovani oching.</p>

      {user?.first_name && (
        <h2>👋 Assalomu alaykum, {user.first_name}!</h2>
      )}

      {materials.length > 0 ? (
        <>
          <h3>Materiallar ro'yxati:</h3>
          <ul>
            {materials.map((m) => (
              <li key={m.id} style={{ marginBottom: "10px" }}>
                <strong>{m.title}</strong> — {m.category} <br />
                <a href={m.file_path} target="_blank" rel="noreferrer">
                  📎 Faylni ochish
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>⏳ Yuklanmoqda yoki materiallar topilmadi.</p>
      )}
    </div>
  );
}

export default App;
