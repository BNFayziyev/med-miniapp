import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

function App() {
  const [materials, setMaterials] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    WebApp.ready();
    const userData = WebApp.initDataUnsafe?.user;
    setUser(userData);

    fetch("https://med-backend-cnt6.onrender.com/materials")
      .then((res) => res.json())
      .then((data) => setMaterials(data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📚 Med Mini ilovasi</h1>
      {user?.first_name && (
        <h2>Assalomu alaykum, {user.first_name}!</h2>
      )}
      <p>Telegram orqali mini ilovani oching.</p>

      <ul style={{ marginTop: "20px" }}>
        {materials.map((m) => (
          <li key={m.id} style={{ marginBottom: "10px" }}>
            <strong>{m.title}</strong> — {m.category} <br />
            <a href={m.file_path} target="_blank" rel="noreferrer">
              Faylni ochish
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
