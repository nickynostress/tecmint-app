import React from 'react';

function UniversalSection({ title, description }) {
  return (
    <div className="universal-section">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default UniversalSection;
