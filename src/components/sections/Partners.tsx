import React from 'react';
import { useTranslation } from 'react-i18next';

const SponsorSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-8 bg-cos-main-orange">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-2xl font-omnes mb-6 text-cos-off-black">
                    {t('sponsors.thankYou')}
                </h2>
                <div className="flex justify-center items-center gap-12 flex-wrap">
                    <div className="w-48 h-24 bg-white flex items-center justify-center rounded-lg shadow-white">
                        <img
                            src="/images/LVHP.png"
                            alt="Landschaftsverband Hameln-Pyrmont e.V."
                            className="max-w-full max-h-full p-2"
                        />
                    </div>
                    <div className="w-48 h-24 bg-white flex items-center justify-center rounded-lg shadow-white">
                        <img
                            src="/images/MWK.png"
                            alt="Niedersächsisches Ministerium für Wissenschaft und Kultur"
                            className="max-w-full max-h-full p-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorSection;