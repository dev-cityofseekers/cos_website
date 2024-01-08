import React from 'react';
import './Ep.css'; // Import your CSS file
import SongCard from '../components/SongCard';

function Ep() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="scrolling-container">
        <div className="scrolling-image"></div>
      </div>

      <div className='relative'>
        {/* Include the SongCard component */}
        <SongCard />
      </div>
    </div>
  );
}

export default Ep;
