import { useTranslation } from "react-i18next";
import { SOCIAL } from "../../config/constants";

const What = () => {
  const { t } = useTranslation();

  const calendarUrl =
    "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MDkyYTI3ODU0OWU5NGFmYjgzNDljMWUwN2NiNTJiNzAgY2l0eW9mc2Vla2Vyc0Bt&tmsrc=cityofseekers%40gmail.com";

  const features = [
    {
      emoji: t("what.card1.emoji"),
      title: t("what.card1.title"),
      description: t("what.card1.description"),
    },
    {
      emoji: t("what.card2.emoji"),
      title: t("what.card2.title"),
      description: t("what.card2.description"),
    },
    {
      emoji: t("what.card3.emoji"),
      title: t("what.card3.title"),
      description: t("what.card3.description"),
    },
  ];

  return (
    <div className="w-full bg-cos-main-orange">
      {/* Photo */}
      <div className="max-w-6xl mx-auto px-4 pt-4 sm:pt-4 md:pt-6 lg:pt-10">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/wallpapers/Martin02.JPG"
            alt={t("what.heroImageAlt")}
            className="w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Title & Intro */}
      <div className="max-w-3xl mx-auto px-6 pt-12 sm:pt-16 text-center">
        <h2 className="font-omnes text-3xl sm:text-4xl md:text-5xl text-cos-off-black mb-6 sm:mb-8">
          {t("what.title")}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-cos-off-black/80 leading-relaxed">
          {t("what.intro")}
        </p>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 pt-14 sm:pt-20 pb-4">
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
            >
              <div className="text-3xl sm:text-4xl mb-4">{feature.emoji}</div>
              <h3 className="font-omnes text-xl sm:text-2xl text-cos-off-black mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-cos-off-black/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-cos-off-black rounded-t-3xl">
        <div className="max-w-4xl mx-auto px-6 py-14 sm:py-20 text-center">
          <h3 className="font-omnes text-2xl sm:text-3xl md:text-4xl text-white mb-10 sm:mb-12">
            {t("what.cta.title")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Ticket - disabled */}
            <div className="rounded-xl border border-white/15 py-5 px-4 flex flex-col items-center gap-2 opacity-50">
              <span className="text-xl sm:text-2xl">🎟️</span>
              <span className="text-xs sm:text-sm text-white/70 font-omnes">
                {t("welcome.ticketsSoon")}
              </span>
            </div>

            <a
              href={SOCIAL.WHATSAPP_WELCOME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 py-5 px-4 flex flex-col items-center gap-2 transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <span className="text-xl sm:text-2xl">💬</span>
              <span className="text-xs sm:text-sm text-white/70 font-omnes">
                {t("what.cta.chat")}
              </span>
            </a>

            <a
              href={SOCIAL.INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 py-5 px-4 flex flex-col items-center gap-2 transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <span className="text-xl sm:text-2xl">📸</span>
              <span className="text-xs sm:text-sm text-white/70 font-omnes">
                {t("what.cta.instagram")}
              </span>
            </a>

            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 py-5 px-4 flex flex-col items-center gap-2 transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <span className="text-xl sm:text-2xl">🗓️</span>
              <span className="text-xs sm:text-sm text-white/70 font-omnes">
                {t("what.cta.calendar")}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
