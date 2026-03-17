import React from 'react';
import steakImg from '../assets/signature-steak.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">Şefin İmzası</span>
        <h1 className="serif">Dinlendirilmiş Wagyu Biftek</h1>
        <p>
          45 gün dinlendirilmiş wagyu sığır etimiz, trüf aromalı sos ve 
          bahçeden sofraya taze sebzelerle eşsiz bir lezzet deneyimi yaşayın.
        </p>
      </div>
      <div className="hero-image-container">
        <img src={steakImg} alt="Signature Wagyu Steak" className="hero-image" />
        <div className="image-accent"></div>
      </div>
    </section>
  );
};

export default Hero;
