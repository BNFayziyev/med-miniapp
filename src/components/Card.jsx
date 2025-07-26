import React from 'react';

const Card = ({ material }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 mb-4">
      <img src={material.images?.[0]} alt="cover" className="rounded-xl w-full h-48 object-cover mb-3" />
      <h2 className="text-lg font-semibold">{material.title}</h2>
      <p className="text-sm text-gray-600">{material.format} • {material.size}</p>

      <a
        href={material.channel_link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-xl text-center w-full"
      >
        📥 Yuklab olish
      </a>
    </div>
  );
};

export default Card;
