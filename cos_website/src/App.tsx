//css
import "./styles.css";
import "./font/font.css";

//components

//icons & images
import FAQ from "./components/sections/FAQ";
import Welcome from "./components/sections/Welcome";
import Where from "./components/sections/Where";
import Header from "./components/Header";
import Footer from "./components/Footer";
import What from "./components/sections/What";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";

/*
#TODO
 create all sections
 fill with content (wait for autumn, better images)

 General:

 journey:

 contact:
  easiest way: <a href="mailto:contact@cityofseekers.eu>contact@cityofseekers.eu</a>"

  FAQ:
fragen von alter seite



classname="overflow-y-scroll snap-y snap-mandatory scroll-smooth"
*/

function App() {
  return (
    <>
      <Header />
      <div className=" h-screen">
        <div className="w-full bg-cos-main-orange">
          <div id="welcome" className="h-screen snap-start">
            <Welcome />
          </div>
          <div id="COS?" className=" overflow-hidden snap-center">
            <What />
          </div>
          <div id="where" className=" overflow-hidden snap-center">
            <Where />
          </div>
          <div id="FAQ" className=" overflow-hidden snap-center">
            <FAQ />
          </div>
          <div id="team" className="  snap-center">
            <Team />
          </div>
          <div id="contact" className="snap-center">
            <Contact />
          </div>
          <div className="bg-cos-off-black  snap-end">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
