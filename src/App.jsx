import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MaterialCard from './components/MaterialCard';

function App() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/materials')
      .then((res) => res.json())
      .then((data) => setMaterials(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="material-list">
        {materials.map((item) => (
          <MaterialCard key={item.id} material={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
