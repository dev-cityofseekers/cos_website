// Ep.tsx
import React from "react";
import "./Ep.css";
import SongCard from "../components/SongCard";
import { FaInstagram } from "react-icons/fa";

function Ep() {
  return (
    <div className="h-screen overflow-hidden baddy">
      <div className="scrolling-container">
        <div className="scrolling-image"></div>
      </div>

      <div className="">
        <div className="absolute w-full schabernack ">
          <div className="mx-auto w-min pb-10">
            <div className="bg-white text-center font-bold text-5xl px-24  py-10  rounded-lg">
              3012 COMPANY
            </div>
          </div>
          <div className="mx-auto space-x-5 flex justify-center">
            <iframe
              className="w-1/2 h-50"
              src="https://open.spotify.com/embed/album/19JKZ4KvSg5IbogAb9cg0P?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="mx-auto w-min pb-10">
            <div className="bg-white text-center font-bold text-5xl px-24  py-10  rounded-lg">
              Become a Companion
            </div>
          </div>

          <div className="justify-center pt-5">
            <div className="flex w-1/5 mx-auto space-x-4 justify-center">
              <a href="https://open.spotify.com/intl-de/artist/1sUpXjiaIi8NSrEq7BWjwm?si=gVIhvHEaT-OS1zgjAi1kXQ">
                <img
                  src={"/images/3012/spotify.png"}
                  alt={"spotify"}
                  className="w-10 h-10"
                />
              </a>
              <a href="https://music.apple.com/at/artist/3012-company/1632920760">
                <img
                  src={"/images/3012/apple.png"}
                  alt={"apple"}
                  className="w-10 h-10"
                />
              </a>
              <a href="https://music.apple.com/at/artist/3012-company/1632920760">
                <img
                  src={"/images/3012/insta.png"}
                  alt={"apple"}
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 
 * <SongCard
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
 * 
 *
 <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/19JKZ4KvSg5IbogAb9cg0P?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
 */

export default Ep;
