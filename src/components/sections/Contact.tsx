import { useTranslation } from "react-i18next";
import { SOCIAL } from "../../config/constants";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-cos-main-orange py-14 sm:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="font-omnes text-3xl sm:text-4xl text-cos-off-black mb-6">
          {t("contact.heading")}
        </h2>

        <div className="bg-white rounded-3xl p-8 sm:p-10">
          {/* Intro + group benefits as flowing text */}
          <div className="text-cos-off-black/70 text-base sm:text-lg leading-relaxed mb-8">
            <p>{t("contact.intro")}</p>
            <p className="mt-4">
              {t("contact.inGroup")} {t("contact.tentRenting.emoji")}{" "}
              {t("contact.tentRenting.description").toLowerCase()}, {t("contact.carSharing.emoji")}{" "}
              {t("contact.carSharing.description").toLowerCase()}, {t("contact.questions.emoji")}{" "}
              {t("contact.questions.description").toLowerCase()} {t("contact.questions.askHere")}.
            </p>
          </div>

          {/* CTA + QR side by side */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
            <a
              href={SOCIAL.WHATSAPP_WELCOME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-cos-off-black text-white rounded-full font-omnes text-lg hover:bg-cos-off-black/80 transition-colors duration-300"
            >
              {t("contact.joinButton")}
            </a>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/images/qr.png"
                alt={t("contact.qrAlt")}
                className="w-24 opacity-80"
                loading="lazy"
              />
              <span className="text-xs text-cos-off-black/40">{t("contact.qrText")}</span>
            </div>
          </div>

          {/* Farewell + links */}
          <p className="font-omnes text-xl text-cos-off-black mb-3">{t("contact.farewell")}</p>
          <p className="text-sm text-cos-off-black/50">
            {t("contact.questionsFeedback")} {t("contact.joinText")}{" "}
            <a
              className="text-cos-blue hover:underline"
              href={SOCIAL.INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contact.instagram")}
            </a>{" "}
            {t("contact.emailText")}{" "}
            <a className="text-cos-blue hover:underline" href={`mailto:${SOCIAL.EMAIL}`}>
              {t("contact.email")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
