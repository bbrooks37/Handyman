import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import handymanLogo from './BB handyman.jpg';
import './App.css';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

function HomePage() {
  return (
    <>
      <section className="handyman-hero">
        <div className="hero-content">
          <h2>Your Trusted Partner for Yard Repairs and Cleanups</h2>
          <p>We provide reliable and high-quality handyman services to homeowners in Lakeland, Florida, and surrounding areas.</p>
          <a href="#services" className="cta-button">See Our Services</a>
        </div>
      </section>
      <section id="services" className="handyman-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Yard Cleanup's</h3>
            <p>Trimming trees, pressure washing, pickup leaves and branches as well as dispose of them and more!</p>
            <Link to="/services/yard-cleanups">Learn More</Link> {/* Update link */}
          </div>
          <div className="service-item">
            <h3>Moving</h3>
            <p>Small moves, trash or junk removal, furniture rearrange, etc...</p>
            <Link to="/services/moving">Learn More</Link> {/* Update link */}
          </div>
          <div className="service-item">
            <h3>Irrigation</h3>
            <p>remove and replace nozzle heads, Lay down sod, Install drip irrigation systems.</p>
            <Link to="/services/irrigation">Learn More</Link> {/* Update link */}
          </div>
          <div className="service-item">
            <h3>Handy Services</h3>
            <p>Change out light bulbs, Clean cowebs, Clean windows, Spray insect repellent, etc...</p>
            <Link to="/services/handy-services">Learn More</Link> {/* Update link */}
          </div>
          {/* Add more services as needed */}
        </div>
      </section>
      <section className="handyman-cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today for a free estimate!</p>
        <a href="#contact" className="cta-button">Contact Us: 813-503-5735</a>
      </section>
    </>
  );
}

function ServicePage() {
  const { serviceName } = useParams();

  const serviceDetails = {
    'yard-cleanups': { // Update key
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
    'handy-services': { // Update key
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

  return (
    <div className="service-page">
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <p>Pricing: {service.pricing}</p>
      {/* Add a "Request a Quote" button or form here */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="handyman-welcome">
        <header className="handyman-header">
          <img src={handymanLogo} alt="RB Handyman Services Logo" className="handyman-logo" />
          <h1>Welcome to Brandon Brooks Handyman Services</h1>
          <nav className="handyman-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceName" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <footer id="contact" className="handyman-footer">
          <p>&copy; {new Date().getFullYear()} BB Handyman Services | Lakeland, Florida | <a href="mailto:your-email@example.com">brandon37.brooks@gmail.com</a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;