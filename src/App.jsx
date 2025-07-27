import { useEffect, useState } from "react";

function App() {
  const [materials, setMaterials] = useState([]);
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();

    fetch("https://med-backend-cnt6.onrender.com/materials")
      .then((res) => res.json())
      .then((data) => setMaterials(data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {tg.initDataUnsafe?.user?.first_name && (
        <h2>Assalomu alaykum, {tg.initDataUnsafe.user.first_name}!</h2>
      )}

      <h1>Materiallar ro'yxati</h1>
      <ul>
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
