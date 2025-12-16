import React from "react";

interface SongCardProps {
  name: string;
  link: string;
  imagePath: string;
  alt: string;
  artist: string;
}

function SongCard({ name, link, imagePath, alt, artist }: SongCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white rounded-lg shadow-lg p-4 w-64">
        <img src={imagePath} alt={alt} className="w-full h-40 object-cover rounded-lg" />
        <div className="mt-4">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-gray-600">{artist}</p>
        </div>
      </div>
    </a>
  );
}

export default SongCard;
