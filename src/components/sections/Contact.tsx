import WelcomeComponent from "../WelcomeComponent";
import { useTranslation } from "react-i18next";
import { SOCIAL } from "../../config/constants";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="font-omnes text-4xl pb-4">{t("contact.heading")}</h2>

        <WelcomeComponent whatsappLink={SOCIAL.WHATSAPP_WELCOME_URL} />

        <br />

        <p className="text-gray-600">
          {t("contact.questionsFeedback")}
          <br />
          {t("contact.joinText")}{" "}
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
          .
        </p>
      </div>
    </div>
  );
}

export default Contact;
