import React from "react";
import { useTranslation } from "react-i18next";
import { SOCIAL, LINKS } from "../../config/constants";

const What = () => {
  const { t } = useTranslation();

  const calendarUrl =
    "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MDkyYTI3ODU0OWU5NGFmYjgzNDljMWUwN2NiNTJiNzAgY2l0eW9mc2Vla2Vyc0Bt&tmsrc=cityofseekers%40gmail.com";

  return (
    <div className="w-full bg-gradient-to-b from-cos-main-orange to-white">
      {/* Hero Section with Title */}
      <div className="relative">
        <div className="h-[50vh] w-full overflow-hidden transform -skew-y-6 translate-y-[-4rem]">
          <div className="transform skew-y-6 h-full translate-y-[4rem]">
            <img
              src="/wallpapers/Martin02.JPG"
              alt={t("what.heroImageAlt")}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cos-off-black/60 to-transparent">
              <div className="h-full flex items-center max-w-6xl mx-auto px-4">
                <div className="text-white max-w-xl transform -translate-y-12">
                  <h1 className="font-omnes text-4xl md:text-6xl mb-6">{t("what.title")}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Box */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-cos-orange">
          <p className="text-lg md:text-xl text-cos-off-black leading-relaxed">{t("what.intro")}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 mt-12 relative z-8">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 - 4 Days of Magic */}
          <div className="bg-white rounded-3xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-4">{t("what.card1.emoji")}</div>
            <h3 className="font-omnes text-2xl text-cos-blue mb-3">{t("what.card1.title")}</h3>
            <p className="text-cos-off-black text-sm leading-relaxed">
              {t("what.card1.description")}
            </p>
          </div>

          {/* Card 2 - Come As You Are */}
          <div className="bg-white rounded-3xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300 md:translate-y-8">
            <div className="text-4xl mb-4">{t("what.card2.emoji")}</div>
            <h3 className="font-omnes text-2xl text-cos-pink mb-3">{t("what.card2.title")}</h3>
            <p className="text-cos-off-black text-sm leading-relaxed">
              {t("what.card2.description")}
            </p>
          </div>

          {/* Card 3 - Not A Camper */}
          <div className="bg-white rounded-3xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-4">{t("what.card3.emoji")}</div>
            <h3 className="font-omnes text-2xl text-cos-orange mb-3">{t("what.card3.title")}</h3>
            <p className="text-cos-off-black text-sm leading-relaxed">
              {t("what.card3.description")}
            </p>
          </div>
        </div>

        {/* Why You'll Love CoS Section */}
        <div className="relative mb-14 mt-24">
          <div className="absolute inset-0 bg-cos-sea-blue/10 rounded-[2.5rem] transform rotate-3"></div>
          <div className="absolute inset-0 bg-cos-orange/10 rounded-[2.5rem] transform -rotate-2"></div>
          <div className="relative bg-white rounded-[2rem] p-8 md:p-12 text-center">
            <h2 className="font-omnes text-3xl md:text-4xl text-cos-off-black mb-8">
              {t("what.whyLove.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-cos-off-black">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-4">{t("what.whyLove.item1.emoji")}</div>
                <h4 className="font-omnes text-xl mb-2">{t("what.whyLove.item1.title")}</h4>
                <p>{t("what.whyLove.item1.description")}</p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-4">{t("what.whyLove.item2.emoji")}</div>
                <h4 className="font-omnes text-xl mb-2">{t("what.whyLove.item2.title")}</h4>
                <p>{t("what.whyLove.item2.description")}</p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-4">{t("what.whyLove.item3.emoji")}</div>
                <h4 className="font-omnes text-xl mb-2">{t("what.whyLove.item3.title")}</h4>
                <p>{t("what.whyLove.item3.description")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative mb-14">
          <div className="bg-gradient-to-r from-cos-orange to-cos-pink rounded-[2rem] p-8 md:p-12 text-center text-white">
            <h2 className="font-omnes text-3xl md:text-4xl mb-8">{t("what.cta.title")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {/* Ticket Button - Disabled for now */}
              <div className="relative group">
                <button
                  disabled
                  className="w-full bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all duration-300 flex flex-col items-center cursor-not-allowed opacity-60"
                  aria-label="Tickets not yet available"
                >
                  <span className="text-2xl mb-2">🎟️</span>
                  <span className="text-sm font-omnes">{t("what.cta.ticket")}</span>
                </button>
                <div className="absolute hidden group-hover:block bg-cos-off-black text-white text-xs px-2 py-1 rounded whitespace-nowrap -bottom-8 left-1/2 -translate-x-1/2 shadow-lg z-50">
                  Coming soon!
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={SOCIAL.WHATSAPP_WELCOME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all duration-300 flex flex-col items-center hover:scale-105"
              >
                <span className="text-2xl mb-2">💬</span>
                <span className="text-sm font-omnes">{t("what.cta.chat")}</span>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all duration-300 flex flex-col items-center hover:scale-105"
              >
                <span className="text-2xl mb-2">📸</span>
                <span className="text-sm font-omnes">{t("what.cta.instagram")}</span>
              </a>

              {/* Calendar */}
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all duration-300 flex flex-col items-center hover:scale-105"
              >
                <span className="text-2xl mb-2">🗓️</span>
                <span className="text-sm font-omnes">{t("what.cta.calendar")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
