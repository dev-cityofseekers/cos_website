import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';

interface ContactProps {
  whatsappLink: string;
}

const ContactComponent: React.FC<ContactProps> = ({ whatsappLink }) => {
  const { t } = useTranslation();

  return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl mt-10 p-5">
        <div className="md:flex">
          <div className="p-8">
            <h1 className="text-lg font-semibold text-indigo-500">
              {t('contact.title')}
            </h1>
            <p className="mt-2 text-gray-600">
              {t('contact.intro')}
            </p>
            <p className="mt-4 text-gray-600">{t('contact.inGroup')}</p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
              <li>
              <span role="img" aria-label="tent">
                {t('contact.tentRenting.emoji')}
              </span>{" "}
                <strong>{t('contact.tentRenting.title')}</strong>{" "}
                {t('contact.tentRenting.description')}
              </li>
              <li>
              <span role="img" aria-label="car">
                {t('contact.carSharing.emoji')}
              </span>{" "}
                <strong>{t('contact.carSharing.title')}</strong>{" "}
                {t('contact.carSharing.description')}
              </li>
              <li>
                <Link
                    to="FAQ"
                    smooth={true}
                    duration={300}
                    className="cursor-pointer"
                >
                <span role="img" aria-label="question">
                  {t('contact.questions.emoji')}
                </span>{" "}
                  <strong>{t('contact.questions.title')}</strong>{" "}
                  {t('contact.questions.description')}{" "}
                  <div className="text-blue-400">{t('contact.questions.faqLink')}</div>{" "}
                  {t('contact.questions.askHere')}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              {t('contact.joinMessage')}
            </p>
            <a
                href={whatsappLink}
                className="mt-4 inline-block bg-indigo-500 text-white px-5 py-2 rounded shadow-lg hover:bg-indigo-400 transition duration-300"
            >
              {t('contact.joinButton')}
            </a>
            <div className="mt-4 text-center text-gray-600">
              {t('contact.qrText')}
            </div>
            <img
                src="/images/qr.png"
                alt={t('contact.qrAlt')}
                className="mt-4 w-48 mx-auto"
            />
            <p className="mt-4 text-center text-gray-600">
              {t('contact.farewell')}
            </p>
          </div>
        </div>
      </div>
  );
};

export default ContactComponent;