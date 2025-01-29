import { useTranslation } from 'react-i18next';

function Welcome() {
    const { t } = useTranslation();

    return (
        <div className="relative w-full h-screen">
            <img
                src="/images/welcome_sun_left_crop.JPG"
                alt={t('welcome.heroAlt')}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-4/12">
                    <img
                        src="/images/logo_white_transparent.png"
                        className="mx-auto pt-8"
                        alt={t('welcome.logoAlt')}
                    /></div>
                <div className="shadow-black">
                    <div className="text-black font-omnes text-center text-4xl lg:text-6xl">
                        {t('welcome.slogan1')}
                    </div>
                    <div className="text-black font-omnes text-center text-4xl lg:text-6xl">
                        {t('welcome.slogan2')}
                    </div>
                </div>
                <div className="shadow-black text-white font-omnes text-center text-4xl lg:text-6xl">
                    {t('welcome.eventDate')}
                </div>

            </div>
            <div className="absolute bottom-20 left-0 right-0 flex justify-center">
                <a href="https://app.tickettailor.com/events/cityofseekers/1550140">
                    <div className="bg-cos-main-orange text-cos-off-black text-xl font-bold py-5 px-10 rounded-full hover:bg-primary-dark hover:scale-105 transition duration-300 ease-in-out shadow-white">
                        {t('welcome.buyTickets')}
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Welcome;