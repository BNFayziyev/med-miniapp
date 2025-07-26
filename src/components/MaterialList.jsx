import React, { useEffect, useState } from "react";
import { fetchMaterials } from "../api";
import MaterialCard from "./MaterialCard";

const MaterialList = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const loadMaterials = async () => {
      try {
        const data = await fetchMaterials();
        setMaterials(data);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    loadMaterials();
  }, []);

  return (
    <div>
      {materials.map((mat) => (
        <MaterialCard key={mat.id} material={mat} />
      ))}
    </div>
  );
};

export default MaterialList;
