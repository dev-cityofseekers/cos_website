import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-1 hover:opacity-60 transition-colors ${
          i18n.language === "en" ? "text-cos-off-black" : "text-cos-off-black/30"
        }`}
      >
        EN
      </button>
      <span className="text-white/50">/</span>
      <button
        onClick={() => changeLanguage("de")}
        className={`px-1 hover:opacity-60 transition-colors ${
          i18n.language === "de" ? "text-cos-off-black" : "text-cos-off-black/30"
        }`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
