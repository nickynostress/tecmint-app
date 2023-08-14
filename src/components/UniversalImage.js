import React from 'react';

function UniversalImage({ imageUrl, altText }) {
  return (
    <div className="universal-image">
      <img src={imageUrl} alt={altText} />
    </div>
  );
}

export default UniversalImage;
