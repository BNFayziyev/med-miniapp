import React from 'react';

const MaterialCard = ({ material }) => {
  return (
    <div className="material-card">
      <img src={material.image_url} alt={material.title} />
      <h2>{material.title}</h2>
      <p>{material.description}</p>
      <a href={material.file_url} target="_blank" rel="noreferrer">
        Yuklab olish
      </a>
    </div>
  );
};

export default MaterialCard;
