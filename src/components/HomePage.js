import React from 'react';
import UniversalSection from './UniversalSection';
import UniversalImage from './UniversalImage';
import './styles/homepage.css';

function HomePage() {
  return (
    <div className="homepage-container">
      <UniversalSection
        title="Welcome to My Portfolio"
        description="This is my portfolio website created using React.js"
      />
      <UniversalImage
        imageUrl="https://cdn.pixabay.com/photo/2019/06/06/14/58/unicorn-4256141_960_720.png"
        altText="Portfolio Image"
      />
      <div className='loremipsum-box'>
        <p className='loremipsum'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Condimentum mattis pellentesque id nibh. Id diam vel quam elementum pulvinar etiam non quam. 
          Adipiscing elit duis tristique sollicitudin nibh. Pulvinar sapien et ligula ullamcorper.
        </p>
      </div>
    </div>
  );
}

export default HomePage;