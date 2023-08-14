import React from 'react';
import UniversalSection from './UniversalSection';
import UniversalImage from './UniversalImage';

function HomePage() {
  return (
    <div>
      <UniversalSection
        title="Welcome to My Portfolio"
        description="This is my portfolio website created using React.js"
      />
      <UniversalImage
        imageUrl="https://promen-maleimage.com/____impro/1/onewebmedia/logo%20promen___serialized1.jpeg?etag=%22483e0-632b845e%22&sourceContentType=image%2Fpng"
        altText="Portfolio Image"
      />
    </div>
  );
}

export default HomePage;
