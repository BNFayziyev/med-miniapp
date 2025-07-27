import { useEffect, useState } from "react";

function App() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetch("https://med-backend-cnt6.onrender.com/materials")
      .then(res => res.json())
      .then(data => {
        setMaterials(data);
      })
      .catch(err => console.error("Xatolik:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Med Mini ilovasi</h1>
      <p>Telegram orqali mini ilovani oching.</p>
      <h2>Materiallar ro'yxati</h2>
      <ul>
        {materials.map((m) => (
          <li key={m.id}>
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
