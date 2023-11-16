/*
import React, { useEffect, useState } from "react";
import img from "../images/hero-cut.jpg";

const Wallpaper: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const numberOfImages = 14;

    function getImagePath(index: number): string {
      // Convert the index to a string and pad it with leading zeros until it is 2 characters long
      const paddedIndex = index.toString().padStart(2, "0");

      // Construct the filename
      const classNameForWallpaper = `bg-image-wallpaper-${paddedIndex}`;

      // Construct the path to the image (adjust the path as needed)
      //const imagePath = `/wallpapers/${filename}`;

      return classNameForWallpaper;
    }

    // Generate a random index to pick a random image
    const randomIndex = Math.floor(Math.random() * numberOfImages) + 1;

    // Set the image URL state
    setImageUrl(getImagePath(randomIndex));
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <div className="h-screen w-full bg-cover bg-center bg-image-wallpaper-1"></div>

    </>
  );
};

export default Wallpaper;







css
      'image-wallpaper-1' : "url('/wallpapers/Martin01.JPG')",
      'image-wallpaper-2' : "url('/wallpapers/Martin02.JPG')",
      'image-wallpaper-3' : "url('/wallpapers/Martin03.JPG')",
      'image-wallpaper-4' : "url('/wallpapers/Martin04.JPG')",
      'image-wallpaper-5' : "url('/wallpapers/Martin05.JPG')",
      'image-wallpaper-6' : "url('/wallpapers/Martin06.JPG')",
      'image-wallpaper-7' : "url('/wallpapers/Martin07.JPG')",
      'image-wallpaper-8' : "url('/wallpapers/Martin08.JPG')",
      'image-wallpaper-9' : "url('/wallpapers/Martin09.JPG')",
      'image-wallpaper-10' : "url('/wallpapers/Martin10.JPG')",
      'image-wallpaper-11' : "url('/wallpapers/Martin11.JPG')",
      'image-wallpaper-12' : "url('/wallpapers/Martin12.JPG')",
      'image-wallpaper-13' : "url('/wallpapers/Martin13.JPG')",
      'image-wallpaper-14' : "url('/wallpapers/Martin14.JPG')", 

      
function select() {
  useEffect(() => {
    console.log("hi");
  });
}



import React, { useEffect } from "react";

const Wallpaper: React.FC = () => {
  const numberOfImages = 14;
  const randomIndex = Math.floor(Math.random() * numberOfImages) + 1;

  return (
    <div
      className={`h-screen w-full bg-cover bg-center bg-image-wallpaper-src-${randomIndex}`}
    ></div>
  );
};

export default Wallpaper;
*/

import React, { useEffect, useState } from "react";

const Wallpaper: React.FC = () => {
  const [bgClassName, setBgClassName] = useState<string | null>(null);

  useEffect(() => {
    const numberOfImages = 14;
    const randomIndex = Math.floor(Math.random() * numberOfImages) + 1;
    //setBgClassName(`bg-image-wallpaper-src-${randomIndex}`);
    setBgClassName(`bg-image-wallpaper-src-6`);
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  if (!bgClassName) return null; // or return a loader/spinner

  return (
    <div className={`h-screen w-full bg-cover bg-center ${bgClassName}`}></div>
  );
};

export default Wallpaper;
