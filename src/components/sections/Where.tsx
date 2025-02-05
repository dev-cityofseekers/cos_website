import CookieConsent from "../CookieConsent";
import GoogleMapComponent  from "../GoogleMaps";
import React, { useState, useEffect } from 'react';

function Where() {
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('googleMapsConsent');
    setCookieConsent(consent);
  }, []);

  return (
    <div className="w-full">

     

      <div className="flex flex-col md:flex-row">
        {/* Left Half: Google Maps (iframe) */}
        <div className="md:w-1/2 ">
        {cookieConsent === null && <CookieConsent setConsent={setCookieConsent} />}
      {cookieConsent === 'accepted' ? <GoogleMapComponent /> : <a href="https://maps.app.goo.gl/Xv5XzfiGpoahynHh9" target="_blank" > <img src="/images/gmaps.png" alt={"google Maps"}/></a>}
   
        </div>

        {/* Right Half: Image */}
        <div className="md:w-1/2">
          <img
            src="/wallpapers/Martin03.JPG"
            alt="guy"
            className="w-full"
            id="right_image"
          />
        </div>
      </div>

    </div>
  );
}




export default Where;
