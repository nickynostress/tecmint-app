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
      <p className='loremipsum'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Condimentum mattis pellentesque id nibh. Id diam vel quam elementum pulvinar etiam non quam. 
        Adipiscing elit duis tristique sollicitudin nibh. Pulvinar sapien et ligula ullamcorper. 
        Eget sit amet tellus cras adipiscing enim. Diam maecenas ultricies mi eget mauris pharetra et ultrices. 
        Neque sodales ut etiam sit amet nisl. Ac turpis egestas sed tempus urna et. 
        Pellentesque dignissim enim sit amet venenatis urna cursus. 
        Neque laoreet suspendisse interdum consectetur. Sem viverra aliquet eget sit.
      </p>
    </div>
  );
}

export default HomePage;