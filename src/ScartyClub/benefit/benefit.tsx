import React from 'react';
import "./benefit.css";

const benefits = [
  {
    title: 'Descuentos Exclusivos',
    description: 'Obtén descuentos exclusivos en tus compras con nuestros socios.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Puntos de Recompensa',
    description: 'Acumula puntos con cada compra y canjéalos por premios.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Envíos Gratis',
    description: 'Disfruta de envíos gratis en productos seleccionados.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const Benefit = () => {
  return (
    <div className="benefits-container">
      <h1 className="benefits-title">Beneficios</h1>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <img src={benefit.imageUrl} alt={benefit.title} className="benefit-image" />
            <h2 className="benefit-title">{benefit.title}</h2>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
