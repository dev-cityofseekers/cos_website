import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

function CodeOfConduct() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cos-main-orange">
      <div className="w-full flex justify-center">
        <div className="flex space-x-3 fixed mt-7 bg-gradient-background-image text-white p-4 px-10 z-10 justify-center rounded-full">
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
          <h1 className="text-4xl font-bold mb-8 text-cos-orange font-omnes">{t("code.title")}</h1>

          <section className="space-y-8">
            {/* Kindness Section */}
            <div className="bg-cos-main-orange bg-opacity-20 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                {t("code.kindness.title")}
              </h2>
              <ul className="space-y-2 text-lg">
                {Array.from({ length: 7 }).map((_, index) => (
                  <li key={`kindness-${index}`} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{t(`code.kindness.items.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equality Section */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                {t("code.equality.title")}
              </h2>
              <ul className="space-y-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={`equality-${index}`} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{t(`code.equality.items.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy Section */}
            <div className="bg-cos-main-orange bg-opacity-20 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                {t("code.privacy.title")}
              </h2>
              <ul className="space-y-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <li key={`privacy-${index}`} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{t(`code.privacy.items.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rules Section */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                {t("code.rules.title")}
              </h2>
              <ul className="space-y-2">
                {Array.from({ length: 2 }).map((_, index) => (
                  <li key={`rules-${index}`} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{t(`code.rules.items.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Sections */}
            {["property", "environment", "conduct", "contact"].map((section) => (
              <div
                key={section}
                className={`${
                  section === "environment" || section === "contact"
                    ? "bg-cos-main-orange bg-opacity-20"
                    : "bg-white shadow-lg"
                } rounded-xl p-6`}
              >
                <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                  {t(`code.${section}.title`)}
                </h2>
                <ul className="space-y-2">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <li key={`${section}-${index}`} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t(`code.${section}.items.${index}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CodeOfConduct;
