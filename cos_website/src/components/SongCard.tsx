import React from 'react';

function SongCard() {
  return (
    <a href='https://open.spotify.com/track/161FZ87jdUK4nMSGayiM2w?si=d1031290ced34fd7' target='blank'>
      <div className="bg-white rounded-lg shadow-lg p-4 w-64">
        <img
          src="/images/3012/allein.JPG"
          alt="Allein"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4">
          <p className="text-lg font-bold">Allein</p>
          <p className="text-gray-600">3012 COMPANY</p>
        </div>
      </div>
    </a>
  );
}

export default SongCard;
