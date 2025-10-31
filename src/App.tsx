//css
import "./styles.css";
import "./font/font.css";

//vercel
import { SpeedInsights } from '@vercel/speed-insights/react';

//icons & images
import FAQ from "./components/sections/FAQ";
import Welcome from "./components/sections/Welcome";
import Where from "./components/sections/Where";
import Header from "./components/Header";
import Footer from "./components/Footer";
import What from "./components/sections/What";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";
//import TicketsSection from "./components/sections/TicketsSection";
import Wallpaper from "./components/sections/Wallpaper";
import FestivalCountdown from "./components/FestivalCountdown";
import Partners from "./components/sections/Partners";
//import './i18n';


function App() {
  return (
    <>
      <Header />
      <div className=" h-screen">
        <div className="w-full bg-cos-main-orange">
          <SpeedInsights/>
          <div id="welcome" className="h-screen snap-start">
            <Welcome/>
          </div>
          {/*<div id="tickets" className="snap-center">
                <TicketsSection />
            </div>*/}
          <div id="COS?" className=" overflow-hidden snap-center">
            <What/>
          </div>{/*
          <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
            <FestivalCountdown/>
          </div>*/}
          <div id="Gallery" className=" overflow-hidden snap-center">
            <Wallpaper/>
          </div>
          <div id="where" className=" overflow-hidden snap-center">
            <Where/>
          </div>

          <div id="FAQ" className=" overflow-hidden snap-center">
            <FAQ/>
          </div>
          <div id="team" className="  snap-center">
            <Team/>
          </div>
            {/*
          <Partners/>
          <div id="contact" className="snap-center">
            <Contact/>
          </div>*/}
          <div className="bg-cos-off-black  snap-end">
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
