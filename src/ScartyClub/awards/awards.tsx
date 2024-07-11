import React from 'react';
import './awards.css';

const awards = [
  {
    title: 'Proveedor del Año',
    description: 'Reconocimiento por nuestra dedicación a ofrecer productos de alta calidad.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Excelencia en Servicio',
    description: 'Premio por nuestro excepcional servicio al cliente y soporte.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Innovación en Ventas',
    description: 'Galardón por nuestras innovadoras estrategias de ventas y marketing.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const Awards = () => {
  return (
    <div className="awards-container">
      <h1 className="awards-title">Premios</h1>
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <img src={award.imageUrl} alt={award.title} className="award-image" />
            <h2 className="award-title">{award.title}</h2>
            <p className="award-description">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
