import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

function CodeOfConduct() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { key: "kindness", count: 7 },
    { key: "equality", count: 5 },
    { key: "privacy", count: 3 },
    { key: "rules", count: 2 },
    { key: "property", count: 2 },
    { key: "environment", count: 2 },
    { key: "conduct", count: 2 },
    { key: "contact", count: 2 },
  ];

  return (
    <div className="min-h-screen bg-cos-main-orange">
      <Header />

      <div className="container mx-auto p-6 pt-36 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 font-omnes text-center">{t("code.title")}</h1>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.key} className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                {t(`code.${section.key}.title`)}
              </h2>
              <ul className="space-y-2">
                {Array.from({ length: section.count }).map((_, index) => (
                  <li key={`${section.key}-${index}`} className="flex items-start leading-relaxed">
                    <span className="mr-3 text-cos-orange">•</span>
                    <span>{t(`code.${section.key}.items.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default CodeOfConduct;
