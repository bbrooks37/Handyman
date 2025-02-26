import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css'; // Make sure to import your CSS

function ServicePage() {
  const { serviceName } = useParams();

  const serviceDetails = {
    'yard-cleanups': {
      title: 'Yard Cleanup\'s',
      description: 'Trimming trees, pressure washing, pickup leaves and branches as well as dispose of them and more!',
      pricing: 'Contact for quote',
    },
    moving: {
      title: 'Moving',
      description: 'Small moves, trash or junk removal, furniture rearrange, etc...',
      pricing: 'Contact for quote',
    },
    irrigation: {
      title: 'Irrigation',
      description: 'Remove and replace nozzle heads, Lay down sod, Install drip irrigation systems.',
      pricing: 'Contact for quote',
    },
    'handy-services': {
      title: 'Handy Services',
      description: 'Change out light bulbs, Clean cowebs, Clean windows, Spray insect repellent, etc...',
      pricing: 'Contact for quote',
    },
    // Add more services as needed
  };

  const service = serviceDetails[serviceName];

  if (!service) {
    return <div>Service not found.</div>;
  }

  const handleRequestQuote = () => {
    // Implement your logic to handle quote requests here
    // For example, you can open a modal, redirect to a form, or send an email
    alert(`Request a quote for ${service.title}`);
    // In a real application, you'd replace the alert with a more robust solution.
  };

  return (
    <div className="service-page">
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <p>Pricing: {service.pricing}</p>
      <button className="quote-button" onClick={handleRequestQuote}>
        Request a Quote
      </button>
    </div>
  );
}

export default ServicePage;