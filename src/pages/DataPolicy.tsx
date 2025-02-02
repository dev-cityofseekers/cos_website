import React, {useEffect} from "react";
import Footer from "../components/Footer";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../components/LanguageSwitcher";



function DataPolicy() {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-cos-main-orange">
            <div className="w-full flex justify-center">
                <div className="flex space-x-3 fixed mt-7 bg-gradient-background-image text-white p-4 px-10 z-10 justify-center rounded-full">
                    <a href="/" className="">
                        <img
                            src="/images/logo_white_transparent.png"
                            alt="logo"
                            className="w-14 transition-transform duration-200 hover:scale-105"
                        />
                    </a>
                    <div className="">
                        <LanguageSwitcher/>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-6 pt-28 max-w-4xl">
                <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                    <h1 className="text-4xl font-bold mb-8 text-cos-orange font-omnes">
                        {t('privacy.title')}
                    </h1>

                    <section className="space-y-8">
                        {/* Introduction */}
                        <div className="bg-cos-main-orange bg-opacity-20 p-6 rounded-xl">
                            <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                                {t('privacy.intro.title')}
                            </h2>
                            <p className="text-cos-off-black">
                                {t('privacy.intro.text')}
                            </p>
                        </div>

                        {/* Information Collection */}
                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                                {t('privacy.collection.title')}
                            </h2>
                            <p className="text-cos-off-black mb-4">
                                {t('privacy.collection.intro')}
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li className="text-cos-off-black">
                                    <strong>{t('privacy.collection.contact.title')}</strong>: {t('privacy.collection.contact.text')}
                                </li>
                                <li className="text-cos-off-black">
                                    <strong>{t('privacy.collection.transaction.title')}</strong>: {t('privacy.collection.transaction.text')}
                                </li>
                            </ul>
                        </div>

                        {/* Google Maps */}
                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                                {t('privacy.maps.title')}
                            </h2>
                            <div className="space-y-4">
                                <p className="text-cos-off-black">
                                    {t('privacy.maps.text1')}
                                    <a href="https://policies.google.com/privacy"
                                       className="text-cos-blue hover:underline ml-1">
                                        {t('privacy.maps.policy')}
                                    </a>
                                </p>
                                <p className="text-cos-off-black">
                                    {t('privacy.maps.text2')}
                                </p>
                            </div>
                        </div>

                        {/* Data Usage */}
                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                                {t('privacy.usage.title')}
                            </h2>
                            <ul className="list-disc pl-8 space-y-2">
                                {['support', 'transactions', 'updates'].map((item) => (
                                    <li key={item} className="text-cos-off-black">
                                        {t(`privacy.usage.${item}`)}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Security, Rights, Changes */}
                        {['security', 'rights', 'changes'].map((section) => (
                            <div key={section} className="bg-white shadow-lg rounded-xl p-6">
                                <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                                    {t(`privacy.${section}.title`)}
                                </h2>
                                <p className="text-cos-off-black">
                                    {t(`privacy.${section}.text`)}
                                    {section === 'rights' && (
                                        <a href="mailto:info@cityofseekers.eu"
                                           className="text-cos-blue hover:underline ml-1">
                                            info@cityofseekers.eu
                                        </a>
                                    )}
                                </p>
                            </div>
                        ))}

                        {/* Contact */}
                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-cos-orange font-omnes">
                                {t('privacy.contact.title')}
                            </h2>
                            <p className="text-cos-off-black">
                                {t('privacy.contact.text')}{' '}
                                <a href="mailto:info@cityofseekers.eu"
                                   className="text-cos-blue hover:underline">
                                    info@cityofseekers.eu
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DataPolicy;