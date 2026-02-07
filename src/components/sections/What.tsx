import { useTranslation } from "react-i18next";
import { SOCIAL } from "../../config/constants";

const What = () => {
  const { t } = useTranslation();

  const calendarUrl = "/cos2026.ics";

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

      {/* Features - Story Layout */}
      <div className="pt-16 sm:pt-24 pb-8">
        {/* Feature 1 - Image Left */}
        <div className="max-w-6xl mx-auto px-4 mb-16 sm:mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/wallpapers/Martin06.JPG"
                  alt="Festival workshops"
                  className="w-full h-[280px] sm:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-4xl sm:text-5xl mb-4">{features[0].emoji}</div>
              <h3 className="font-omnes text-2xl sm:text-3xl text-cos-off-black mb-4">
                {features[0].title}
              </h3>
              <p className="text-base sm:text-lg text-cos-off-black/70 leading-relaxed">
                {features[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 - Image Right */}
        <div className="max-w-6xl mx-auto px-4 mb-16 sm:mb-24">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/wallpapers/Martin09.JPG"
                  alt="Community connection"
                  className="w-full h-[280px] sm:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-4xl sm:text-5xl mb-4">{features[1].emoji}</div>
              <h3 className="font-omnes text-2xl sm:text-3xl text-cos-off-black mb-4">
                {features[1].title}
              </h3>
              <p className="text-base sm:text-lg text-cos-off-black/70 leading-relaxed">
                {features[1].description}
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 - Image Left */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/wallpapers/Martin03.JPG"
                  alt="Camping together"
                  className="w-full h-[280px] sm:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-4xl sm:text-5xl mb-4">{features[2].emoji}</div>
              <h3 className="font-omnes text-2xl sm:text-3xl text-cos-off-black mb-4">
                {features[2].title}
              </h3>
              <p className="text-base sm:text-lg text-cos-off-black/70 leading-relaxed">
                {features[2].description}
              </p>
            </div>
          </div>
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
              download="CityOfSeekers2026.ics"
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
