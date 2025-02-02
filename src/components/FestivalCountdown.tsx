import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const FestivalCountdown = () => {
    const { t } = useTranslation();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const festivalDate = new Date('2025-06-19T12:00:00');
            const now = new Date();
            const difference = festivalDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gradient-to-r from-cos-sea-blue to-cos-pink p-4  rounded-lg w-full max-w-4xl mx-auto pb-8">
            <h2 className="text-2xl md:text-3xl font-omnes font-bold text-center mb-4 md:mb-6 text-cos-off-black">{t('countdown.title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-2 md:p-4 rounded-lg shadow-white bg-white shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-2xl md:text-4xl font-omnes font-bold text-cos-orange">{timeLeft.days}</div>
                    <div className="text-sm md:text-base text-cos-off-black">{t('countdown.days')}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-2 md:p-4 rounded-lg shadow-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-2xl md:text-4xl font-omnes font-bold text-cos-orange">{timeLeft.hours}</div>
                    <div className="text-sm md:text-base text-cos-off-black">{t('countdown.hours')}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-2 md:p-4 rounded-lg shadow-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-2xl md:text-4xl font-omnes font-bold text-cos-orange">{timeLeft.minutes}</div>
                    <div className="text-sm md:text-base text-cos-off-black">{t('countdown.minutes')}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-2 md:p-4 rounded-lg shadow-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-2xl md:text-4xl font-omnes font-bold text-cos-orange">{timeLeft.seconds}</div>
                    <div className="text-sm md:text-base text-cos-off-black">{t('countdown.seconds')}</div>
                </div>
            </div>
        </div>
    );
};

export default FestivalCountdown;