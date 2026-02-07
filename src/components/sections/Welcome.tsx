import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import FestivalCountdown from "../FestivalCountdown";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

function Welcome() {
  const { t } = useTranslation();
  const [_isMobile, setIsMobile] = useState(false);
  const playerRef = useRef<any>(null);
  const videoId = "Ipl0aHlVPAI";

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
        },
      });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-8">
        <div className="relative w-full h-full">
          <div
            id="youtube-player"
            className="absolute inset-0 w-full h-full"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              minHeight: "100vh",
              minWidth: "177.77vh",
            }}
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-9 bg-black bg-opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-9 h-full flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="w-36 sm:w-44 lg:w-56">
          <img
            src="/images/logo_white_transparent.png"
            className="mx-auto"
            alt={t("welcome.logoAlt")}
            loading="eager"
          />
        </div>

        {/* Slogan */}
        <div className="mt-6 sm:mt-8">
          <div className="text-white font-omnes text-center text-2xl sm:text-3xl lg:text-5xl drop-shadow-lg mb-1">
            {t("welcome.slogan1")}
          </div>
          <div className="text-white font-omnes text-center text-2xl sm:text-3xl lg:text-5xl drop-shadow-lg">
            {t("welcome.slogan2")}
          </div>
        </div>

        {/* Date */}
        <div className="mt-4 sm:mt-5 text-white/80 font-omnes text-center text-base sm:text-lg lg:text-2xl tracking-wide">
          {t("welcome.eventDate")}
        </div>

        {/* Tickets Button */}
        <div className="relative group mt-6 sm:mt-8">
          <button
            disabled
            className="border border-white/40 text-white/70 text-sm sm:text-base lg:text-lg font-omnes py-2.5 sm:py-3 px-6 sm:px-8 rounded-full cursor-default backdrop-blur-sm transition-colors duration-300 hover:border-white/60 hover:text-white/90"
            aria-label={t("welcome.ticketsSoon")}
          >
            {t("welcome.ticketsSoon")}
          </button>
        </div>

        {/* Countdown */}
        <div className="mt-8 sm:mt-10 w-full">
          <FestivalCountdown />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
