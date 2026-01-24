import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import GoogleMapComponent from "../components/GoogleMaps";
import { LOCATION, FESTIVAL, LINKS } from "../config/constants";
import { FaTrain, FaCar, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function Where() {
  const { t } = useTranslation();
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const consent = localStorage.getItem("googleMapsConsent");
    setCookieConsent(consent);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("googleMapsConsent", "accepted");
    setCookieConsent("accepted");
  };

  const handleRejectCookies = () => {
    localStorage.setItem("googleMapsConsent", "rejected");
    setCookieConsent("rejected");
  };

  return (
    <div className="min-h-screen bg-cos-main-orange">
      <Header />

      {/* Content */}
      <div className="container mx-auto p-6 pt-28 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 font-omnes">{t("where.title")}</h1>
          <p className="text-gray-700 text-lg">{t("where.subtitle")}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left: Location Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-2xl text-cos-orange" />
                <h2 className="text-xl font-semibold font-omnes">{t("where.address")}</h2>
              </div>
              <p className="text-gray-700 text-lg">{LOCATION.FULL_ADDRESS}</p>
            </div>

            {/* Date Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaCalendarAlt className="text-2xl text-cos-orange" />
                <h2 className="text-xl font-semibold font-omnes">{t("where.date")}</h2>
              </div>
              <p className="text-gray-700 text-lg">{FESTIVAL.DATE_DISPLAY}</p>
            </div>

            {/* Directions */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 font-omnes">
                {t("where.directions.title")}
              </h2>

              <div className="space-y-4">
                {/* By Train */}
                <div className="flex items-start gap-3">
                  <FaTrain className="text-xl text-cos-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("where.directions.byTrain")}</h3>
                    <p className="text-gray-600 text-sm">{t("where.directions.byTrainText")}</p>
                  </div>
                </div>

                {/* By Car */}
                <div className="flex items-start gap-3">
                  <FaCar className="text-xl text-cos-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("where.directions.byCar")}</h3>
                    <p className="text-gray-600 text-sm">{t("where.directions.byCarText")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map with Cookie Consent Overlay */}
          <div className="h-96 md:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-lg relative">
            {cookieConsent === "accepted" ? (
              <div className="w-full h-full">
                <GoogleMapComponent />
              </div>
            ) : (
              <>
                {/* Map preview image */}
                <img
                  src="/images/gmaps.png"
                  alt="Google Maps location"
                  className="w-full h-full object-cover"
                />

                {/* Cookie consent overlay */}
                {cookieConsent === null && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-white text-sm md:text-base mb-4">
                      This site uses Google Maps. By accepting, you agree to Google Maps' cookies.
                      <a
                        href="/privacy-policy"
                        className="text-yellow-500 hover:text-yellow-300 ml-1"
                      >
                        Learn more
                      </a>
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={handleAcceptCookies}
                        className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Accept
                      </button>
                      <button
                        onClick={handleRejectCookies}
                        className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                )}

                {/* Rejected state - show link to open in Google Maps */}
                {cookieConsent === "rejected" && (
                  <a
                    href={LINKS.GOOGLE_MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-white font-semibold px-4 py-2 bg-cos-orange rounded-full">
                      {t("where.mapConsent.rejected")}
                    </span>
                  </a>
                )}
              </>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/wallpapers/Martin03.JPG"
            alt="Festival location"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default Where;
