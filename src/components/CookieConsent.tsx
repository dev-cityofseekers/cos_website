import { useTranslation } from "react-i18next";

interface CookieConsentProps {
  setConsent: (consent: string | null) => void;
}

function CookieConsent({ setConsent }: CookieConsentProps) {
  const { t } = useTranslation();

  const handleAccept = () => {
    localStorage.setItem("googleMapsConsent", "accepted");
    setConsent("accepted");
  };

  const handleReject = () => {
    localStorage.setItem("googleMapsConsent", "rejected");
    setConsent("rejected");
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm bg-cos-off-black/80 backdrop-blur-lg py-4 px-5 text-white rounded-2xl z-50 shadow-xl border border-white/10">
      <p className="text-sm leading-relaxed mb-4">
        {t(
          "cookie.message",
          "This site uses Google Maps. By accepting, you agree to Google Maps' cookies."
        )}
        <a
          href="/privacy-policy"
          className="text-cos-orange hover:text-cos-yellow ml-1 underline underline-offset-2"
        >
          {t("cookie.learnMore", "Learn more")}
        </a>
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm"
        >
          {t("cookie.accept", "Accept")}
        </button>
        <button
          onClick={handleReject}
          className="flex-1 bg-transparent hover:bg-white/10 text-white/70 hover:text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm border border-white/20"
        >
          {t("cookie.reject", "Reject")}
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
