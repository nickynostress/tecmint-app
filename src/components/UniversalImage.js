import React from 'react';

function UniversalImage({ imageUrl, altText }) {
  return (
    <div className="universal-image">
      <img src={imageUrl} alt={altText} style={{ width: '200px', height: '200px' }} />
    </div>
  );
}

export default UniversalImage;