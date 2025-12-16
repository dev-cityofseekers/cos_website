import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Imprint() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cos-main-orange">
      <div className="w-full flex justify-center">
        <div className="flex space-x-3 fixed mt-7 bg-gradient-background-image text-white p-4 px-10 z-10  justify-center rounded-full">
          <a href="/" className="">
            <img
              src="/images/logo_white_transparent.png"
              alt="logo"
              className="w-14 transition-transform duration-200 hover:scale-105"
            />
          </a>
          <div className="">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 pt-28 max-w-4xl">
        <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-8 text-cos-orange font-omnes">
            {t("imprint.title")}
          </h1>

          <section className="space-y-8">
            {/* Company Info */}
            <div className="bg-cos-main-orange bg-opacity-20 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                {t("imprint.companyInfo.title")}
              </h2>
              <div className="space-y-3 text-lg">
                <p className="font-medium">{t("imprint.companyInfo.name")}</p>
                <p>{t("imprint.companyInfo.address")}</p>
                <p>
                  {t("imprint.companyInfo.phone")}:{" "}
                  <a href="tel:+491781561859" className="text-cos-blue hover:underline">
                    +49 178 1561859
                  </a>
                </p>
                <p>
                  {t("imprint.companyInfo.email")}:{" "}
                  <a href="mailto:info@cityofseekers.eu" className="text-cos-blue hover:underline">
                    info@cityofseekers.eu
                  </a>
                </p>
                <p>{t("imprint.companyInfo.vat")}</p>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {["representative", "content", "webDev"].map((section) => (
                <div
                  key={section}
                  className="bg-white shadow-lg rounded-xl p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <h2 className="text-xl font-semibold mb-2 text-cos-orange font-omnes">
                    {t(`imprint.${section}.title`)}
                  </h2>
                  <p className="text-cos-off-black">
                    {t(`imprint.${section}.name`)}
                    {section === "webDev" && (
                      <>
                        :{" "}
                        <a
                          href="mailto:dev@cityofseekers.eu"
                          className="text-cos-blue hover:underline"
                        >
                          dev@cityofseekers.eu
                        </a>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Legal Sections */}
            <div className="space-y-8">
              {["disclaimer", "privacy", "copyright"].map((section) => (
                <div key={section} className="bg-white shadow-lg rounded-xl p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                    {t(`imprint.${section}.title`)}
                  </h2>
                  <p className="text-cos-off-black leading-relaxed">
                    {t(`imprint.${section}.text`)}
                    {section === "privacy" && (
                      <Link to="/privacy-policy" className="text-cos-blue hover:underline ml-1">
                        {t("imprint.privacy.link")}
                      </Link>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Imprint;
