import React from 'react';

function UniversalImage({ imageUrl, altText }) {
  return (
    <div className="universal-image">
      <img src={imageUrl} alt={altText} style={{ width: '150px', height: '150px' }} />
    </div>
  );
}

export default UniversalImage;