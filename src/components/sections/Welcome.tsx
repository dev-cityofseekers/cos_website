import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

function Welcome() {
  const { t } = useTranslation();
  const [_isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);
  const videoId = "HEQqeUN11tI";

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

  const toggleSound = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

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

      {/* Sound Control */}
      <button
        onClick={toggleSound}
        className="absolute bottom-4 right-4 z-20 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 text-white"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Content */}
      <div className="relative z-9 h-full flex flex-col items-center justify-center px-4">
        <div className="w-32 sm:w-36 lg:w-48 mb-6">
          <img
            src="/images/logo_white_transparent.png"
            className="mx-auto"
            alt={t("welcome.logoAlt")}
            loading="eager"
          />
        </div>

        <div className="mt-40 mb-6 max-w-2xl">
          <div className="text-white font-omnes text-center text-2xl sm:text-3xl lg:text-5xl drop-shadow-lg mb-1">
            {t("welcome.slogan1")}
          </div>
          <div className="text-white font-omnes text-center text-2xl sm:text-3xl lg:text-5xl drop-shadow-lg">
            {t("welcome.slogan2")}
          </div>
        </div>

        <div className="text-white font-omnes text-center text-lg sm:text-xl lg:text-3xl mb-8">
          {t("welcome.eventDate")}
        </div>

        <div className="relative group">
          <button
            disabled
            className="bg-gray-400 text-gray-200 text-base sm:text-lg lg:text-xl font-omnes py-3 sm:py-4 px-6 sm:px-8 rounded-full cursor-not-allowed shadow-lg opacity-60"
            aria-label="Tickets not yet available"
          >
            {t("welcome.buyTickets")}
          </button>
          <div className="absolute hidden group-hover:block bg-cos-off-black text-white text-sm sm:text-base px-3 py-2 rounded-lg whitespace-nowrap -bottom-12 left-1/2 -translate-x-1/2 shadow-xl z-50">
            Tickets will be available soon
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
