import { useTranslation } from "react-i18next";
import { BaseLanguage, getBaseLanguage, isEasyLanguage, toLanguage } from "../i18n";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const base = getBaseLanguage(i18n.language);
  const easy = isEasyLanguage(i18n.language);

  const changeLanguage = (lng: BaseLanguage) => {
    i18n.changeLanguage(toLanguage(lng, easy));
  };

  const toggleEasy = () => {
    i18n.changeLanguage(toLanguage(base, !easy));
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-1 hover:opacity-60 transition-colors ${
          base === "en" ? "text-white" : "text-white/50"
        }`}
      >
        EN
      </button>
      <span className="text-white/50">/</span>
      <button
        onClick={() => changeLanguage("de")}
        className={`px-1 hover:opacity-60 transition-colors ${
          base === "de" ? "text-white" : "text-white/50"
        }`}
      >
        DE
      </button>
      <button
        onClick={toggleEasy}
        aria-pressed={easy}
        aria-label={t("general.easyLanguage.label")}
        title={t("general.easyLanguage.label")}
        className={`ml-2 px-2 rounded-full border text-sm transition-colors hover:opacity-80 ${
          easy ? "bg-white text-cos-off-black border-white" : "text-white/75 border-white/40"
        }`}
      >
        {t("general.easyLanguage.short")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
