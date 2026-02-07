import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { wallpaperImages } from "../../data/wallpaperImages";

const GallerySection = () => {
  const images = useMemo(() => wallpaperImages, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<number[]>([0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setCurrentIndex(newIndex);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    },
    [isTransitioning]
  );

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      changeSlide((currentIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, changeSlide, images.length]);

  useEffect(() => {
    const preloadImage = (index: number) => {
      if (!loadedImages.includes(index)) {
        const img = new Image();
        img.src = images[index].url;
        img.onload = () => {
          setLoadedImages((prev) => [...prev, index]);
        };
      }
    };

    const nextIndex = (currentIndex + 1) % images.length;
    preloadImage(nextIndex);
  }, [currentIndex, images, loadedImages]);

  const nextSlide = () => {
    setIsPaused(true);
    changeSlide(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => {
    setIsPaused(true);
    changeSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <div className="w-full bg-cos-off-black">
      <div className="relative w-full max-w-6xl mx-auto px-4 py-4 sm:py-6 md:py-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out
                                ${index === currentIndex ? "opacity-100" : "opacity-0"}
                                ${loadedImages.includes(index) ? "" : "invisible"}`}
            >
              {loadedImages.includes(index) && (
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous image"
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40
                        text-white p-2 rounded-full backdrop-blur-sm
                        transition-all duration-200 disabled:opacity-30"
        >
          <ChevronLeft className="w-6 h-6" aria-hidden="true" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next image"
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40
                        text-white p-2 rounded-full backdrop-blur-sm
                        transition-all duration-200 disabled:opacity-30"
        >
          <ChevronRight className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default GallerySection;
