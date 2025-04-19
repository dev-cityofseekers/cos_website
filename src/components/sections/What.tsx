import React from 'react';
import { useTranslation } from 'react-i18next';

const What = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full bg-gradient-to-b from-cos-main-orange to-white">
            {/* Diagonal Hero Section */}
            <div className="relative">
                <div className="h-[70vh] w-full overflow-hidden transform -skew-y-6 translate-y-[-4rem]">
                    <div className="transform skew-y-6 h-full translate-y-[4rem]">
                        <img
                            src="/wallpapers/Martin02.JPG"
                            alt={t('what.heroImageAlt')}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-cos-off-black/50 to-transparent">
                            <div className="h-full flex items-center max-w-6xl mx-auto px-4">
                                <div className="text-white max-w-xl transform -translate-y-12">
                                    <h1 className="font-omnes text-6xl mb-6">
                                        {t('what.title')}
                                    </h1>
                                    <div className="bg-cos-pink/20 backdrop-blur-sm p-6 rounded-2xl">
                                        <p className="text-2xl">
                                            {t('what.subtitle')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-8">
                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white rounded-3xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                        <div className="text-4xl mb-4">🌅</div>
                        <h3 className="font-omnes text-2xl text-cos-blue mb-3">
                            {t('what.card1.title')}
                        </h3>
                        <p className="text-cos-off-black">
                            {t('what.card1.description')}
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300 md:translate-y-8">
                        <div className="text-4xl mb-4">🎵</div>
                        <h3 className="font-omnes text-2xl text-cos-pink mb-3">
                            {t('what.card2.title')}
                        </h3>
                        <p className="text-cos-off-black">
                            {t('what.card2.description')}
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                        <div className="text-4xl mb-4">✨</div>
                        <h3 className="font-omnes text-2xl text-cos-orange mb-3">
                            {t('what.card3.title')}
                        </h3>
                        <p className="text-cos-off-black">
                            {t('what.card3.description')}
                        </p>
                    </div>
                </div>

                {/* Connection Section */}
                <div className="relative mb-14 mt-24">
                    <div className="absolute inset-0 bg-cos-sea-blue/10 rounded-[2.5rem] transform rotate-3"></div>
                    <div className="absolute inset-0 bg-cos-orange/10 rounded-[2.5rem] transform -rotate-2"></div>
                    <div className="relative bg-white rounded-[2rem] p-12 text-center">
                        <h2 className="font-omnes text-4xl text-cos-off-black mb-8">
                            {t('what.connection.title')}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 text-cos-off-black">
                            <div className="transform hover:scale-105 transition-transform duration-300">
                                <div className="text-3xl mb-4">💫</div>
                                <h4 className="font-omnes text-xl mb-2">{t('what.connection.item1.title')}</h4>
                                <p>{t('what.connection.item1.description')}</p>
                            </div>
                            <div className="transform hover:scale-105 transition-transform duration-300">
                                <div className="text-3xl mb-4">🤝</div>
                                <h4 className="font-omnes text-xl mb-2">{t('what.connection.item2.title')}</h4>
                                <p>{t('what.connection.item2.description')}</p>
                            </div>
                            <div className="transform hover:scale-105 transition-transform duration-300">
                                <div className="text-3xl mb-4">✨</div>
                                <h4 className="font-omnes text-xl mb-2">{t('what.connection.item3.title')}</h4>
                                <p>{t('what.connection.item3.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action - Card Style Design
                <div className="text-center pb-8">
                    <div className="inline-block">
                        <a href="https://buytickets.at/cityofseekers/1550140">
                            <button
                                className="bg-white text-cos-off-black text-xl font-omnes py-5 px-10 rounded-full hover:bg-primary-dark hover:scale-105 transition duration-300 ease-in-out shadow-white">
                                {t('what.joinButton')}
                            </button>
                        </a>
                    </div>
                </div>*/}
            </div>
        </div>
    );
};

export default What;