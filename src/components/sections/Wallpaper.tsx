

import React, { useEffect, useState } from "react";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Ensure the CSS is imported to apply default styles


const images = [
  {
    original: '/wallpapers/Martin01.JPG',
    thumbnail: '/wallpapers/Martin01.JPG', // If you have separate thumbnails, replace the URLs here
  },
  {
    original: '/wallpapers/Martin04.JPG',
    thumbnail: '/wallpapers/Martin04.JPG',
  },
  {
    original: '/wallpapers/Martin05.JPG',
    thumbnail: '/wallpapers/Martin05.JPG',
  },
  {
    original: '/wallpapers/Martin06.JPG',
    thumbnail: '/wallpapers/Martin06.JPG',
  },
  {
    original: '/wallpapers/Martin08.JPG',
    thumbnail: '/wallpapers/Martin08.JPG',
  },
  {
    original: '/wallpapers/Martin09.JPG',
    thumbnail: '/wallpapers/Martin09.JPG',
  },
  {
    original: '/wallpapers/Martin10.JPG',
    thumbnail: '/wallpapers/Martin10.JPG',
  },
  {
    original: '/wallpapers/Martin11.JPG',
    thumbnail: '/wallpapers/Martin11.JPG',
  },
  {
    original: '/wallpapers/Martin13.JPG',
    thumbnail: '/wallpapers/Martin13.JPG',
  },
  {
    original: '/wallpapers/Martin14.JPG',
    thumbnail: '/wallpapers/Martin14.JPG',
  }
];


/**
 bg-black
 bg-gradient-background-image
 */
const Wallpaper = () => {
  return <div className="bg-gradient-background-image h-full">
          <ImageGallery
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            slideDuration={450}
            showThumbnails = {false}
            lazyLoad={true}
          />
  </div>

  


            
            ;
}

export default Wallpaper;

