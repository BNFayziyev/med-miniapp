import React, { useEffect, useState } from 'react';
import { fetchMaterials } from '../api';
import Card from './Card';

const MaterialList = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchMaterials();
      setMaterials(data);
    };
    load();
  }, []);

  return (
    <div className="p-4">
      {materials.length === 0 ? (
        <p className="text-center text-gray-500">Materiallar mavjud emas</p>
      ) : (
        materials.map((m) => <Card key={m.id} material={m} />)
      )}
    </div>
  );
};

export default MaterialList;
