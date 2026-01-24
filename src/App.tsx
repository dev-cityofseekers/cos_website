//css
import "./styles.css";
import "./font/font.css";

//vercel
import { SpeedInsights } from "@vercel/speed-insights/react";

//icons & images
import FAQ from "./components/sections/FAQ";
import Welcome from "./components/sections/Welcome";
import Header from "./components/Header";
import Footer from "./components/Footer";
import What from "./components/sections/What";
import Wallpaper from "./components/sections/Wallpaper";
import ErrorBoundary from "./components/ErrorBoundary";
import Contact from "./components/sections/Contact";
import Partners from "./components/sections/Partners";

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
            <div id="FAQ" className=" overflow-hidden snap-center">
              <FAQ />
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div id="Contact" className=" overflow-hidden snap-center">
              <Contact />
            </div>
          </ErrorBoundary>
          <Partners />
          <div className="bg-cos-off-black snap-end">
            <Footer />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
