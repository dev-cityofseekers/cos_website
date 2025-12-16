//css
import "./styles.css";
import "./font/font.css";

//vercel
import { SpeedInsights } from "@vercel/speed-insights/react";

//icons & images
import FAQ from "./components/sections/FAQ";
import Welcome from "./components/sections/Welcome";
import Where from "./components/sections/Where";
import Header from "./components/Header";
import Footer from "./components/Footer";
import What from "./components/sections/What";
import Team from "./components/sections/Team";
import Wallpaper from "./components/sections/Wallpaper";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Header />
      <div className=" h-screen">
        <div className="w-full bg-cos-main-orange">
          <SpeedInsights />
          <ErrorBoundary>
            <div id="welcome" className="h-screen snap-start">
              <Welcome />
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div id="COS?" className=" overflow-hidden snap-center">
              <What />
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div id="Gallery" className=" overflow-hidden snap-center">
              <Wallpaper />
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div id="where" className=" overflow-hidden snap-center">
              <Where />
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div id="FAQ" className=" overflow-hidden snap-center">
              <FAQ />
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div id="team" className="  snap-center">
              <Team />
            </div>
          </ErrorBoundary>
          <div className="bg-cos-off-black  snap-end">
            <Footer />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
