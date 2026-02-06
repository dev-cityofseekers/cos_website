import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FESTIVAL } from "../config/constants";

const pad = (n: number): string => String(n).padStart(2, "0");

const FestivalCountdown = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const festivalDate = new Date(FESTIVAL.COUNTDOWN_DATE);
      const now = new Date();
      const difference = festivalDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: t("countdown.days") },
    { value: timeLeft.hours, label: t("countdown.hours") },
    { value: timeLeft.minutes, label: t("countdown.minutes") },
    { value: timeLeft.seconds, label: t("countdown.seconds") },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-5 md:gap-8">
          <div className="flex flex-col items-center">
            <span
              className="font-omnes font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight text-cos-orange"
              style={{ textShadow: "0 0 30px rgba(254,195,96,0.3)" }}
            >
              {pad(unit.value)}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-white/60 mt-1 sm:mt-2">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span
              className="text-2xl sm:text-3xl md:text-5xl font-light text-white/20 -mt-4 sm:-mt-5 md:-mt-7 select-none"
              aria-hidden="true"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default FestivalCountdown;
