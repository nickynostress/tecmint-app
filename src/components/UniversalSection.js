import React from 'react';
import './styles/universalsection.css';

function UniversalSection({ title, description }) {
  return (
    <div className="universal-section">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

export default UniversalSection;