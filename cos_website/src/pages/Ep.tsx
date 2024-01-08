// Ep.tsx
import React from "react";
import "./Ep.css";
import SongCard from "../components/SongCard";

function Ep() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="scrolling-container">
        <div className="scrolling-image"></div>
      </div>

      <div className="">
        <div className="absolute top-1/4 w-full">
          <div className="mx-auto w-1/3 pb-10">
            <div className="bg-white text-center font-bold text-5xl  py-10  rounded-lg">
              3012 COMPANY
            </div>
          </div>
          <div className="mx-auto space-x-5 flex justify-center">
            <SongCard
              name={"7ter Himmel"}
              link={
                "https://open.spotify.com/intl-de/track/4mKNGdFAuiYJXO8iUYkTpp?si=564a821f4ad4424a"
              }
              imagePath={"/images/3012/7h.PNG"}
              alt={"7h"}
              artist={"3012 COMPANY"}
            />
            <SongCard
              name={"Allein"}
              link={
                "https://open.spotify.com/track/161FZ87jdUK4nMSGayiM2w?si=d1031290ced34fd7"
              }
              imagePath={"/images/3012/allein.JPG"}
              alt={"allein img"}
              artist={"3012 COMPANY"}
            />
            <SongCard
              name={"Durcheinander EP"}
              link={""}
              imagePath={"/images/3012/ep_cover.PNG"}
              alt={"ep img"}
              artist={"Coming Soon"}
            />
          </div>
          {/*
          <div className="justify-center">
            <div className="flex">
              <a href="https://open.spotify.com/intl-de/artist/1sUpXjiaIi8NSrEq7BWjwm?si=gVIhvHEaT-OS1zgjAi1kXQ">
                <img
                  src={"/images/3012/spotify.png"}
                  alt={"spotify"}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </a>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default Ep;
