import WelcomeComponent from "../WelcomeComponent";
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <h2 className="font-omnes text-4xl pb-4">{t('contact.heading')}</h2>

                <WelcomeComponent whatsappLink={"http://welcome.cityofseekers.eu/"}/>

                <br/>

                <p className="text-gray-600">
                    {t('contact.questionsFeedback')}<br/>
                    {t('contact.joinText')}{" "}
                    <a
                        className="text-cos-blue hover:underline"
                        href="https://instagram.com/cityofseekers"
                        target="_blank"
                    >{t('contact.instagram')}</a> {t('contact.emailText')}{' '}
                    <a
                        className="text-cos-blue hover:underline"
                        href="mailto:info@cityofseekers.eu"
                    >
                        {t('contact.email')}
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

export default Contact;