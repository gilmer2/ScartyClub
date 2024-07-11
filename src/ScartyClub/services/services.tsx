import React from 'react';
import './services.css';

const services = [
  {
    title: 'Consultoría Empresarial',
    description: 'Asesoría experta para optimizar tus operaciones y maximizar tus beneficios.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Gestión de Inventarios',
    description: 'Soluciones avanzadas para una gestión eficiente de tu inventario.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Logística y Distribución',
    description: 'Servicios de logística y distribución que aseguran entregas rápidas y seguras.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Marketing y Publicidad',
    description: 'Estrategias de marketing y publicidad para aumentar la visibilidad de tu negocio.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Servicios</h1>
      <div className="services-description">
        En ScartyClub, ofrecemos una amplia gama de servicios diseñados para ayudar a tu negocio a prosperar. Con nuestra experiencia y dedicación, garantizamos soluciones de alta calidad adaptadas a tus necesidades.
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.imageUrl} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
