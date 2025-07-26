import { useEffect, useState } from "react";
import { fetchMaterials } from "../api";

const Home = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchMaterials()
      .then((res) => setMaterials(res.data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div>
      <h1>Dars Materiallari</h1>
      <ul>
        {materials.map((mat: any) => (
          <li key={mat.id}>
            <b>{mat.title}</b> - {mat.category}
            <br />
            <a href={mat.file_path} target="_blank">Yuklab olish</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
