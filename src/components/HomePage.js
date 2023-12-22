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
        imageUrl="https://cdn.pixabay.com/photo/2017/11/09/10/39/christmas-2933008_1280.jpg"
        altText="Portfolio Image"
      />
      <div className='loremipsum-box'>
        <p className='loremipsum'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Condimentum mattis pellentesque id nibh. Id diam vel quam elementum pulvinar etiam non quam.
        </p>
      </div>
    </div>
  );
}

export default HomePage;