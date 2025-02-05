import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const images = [
    {
      url: '/wallpapers/Martin01.JPG',
      alt: "Festival Moment 1",
      photographer: {
        name: "Martin",
        instagram: ""
      }
    },
    {
      url: '/wallpapers/Martin04.JPG',
      alt: "Festival Moment 4",
      photographer: {
        name: "Martin",
        instagram: ""
      }
    },
    {
      url: '/wallpapers/Martin05.JPG',
      alt: "Festival Moment 5",
      photographer: {
        name: "Martin",
        instagram: ""
      }
    },
    {
      url: '/wallpapers/Martin06.JPG',
      alt: "Festival Moment 6",
      photographer: {
        name: "Martin",
        instagram: ""
      }
    },
    {
      url: '/wallpapers/Martin08.JPG',
      alt: "Festival Moment 8",
      photographer: {
        name: "Martin",
        instagram: ""
      }
    },
    {
      url: '/wallpapers/Martin09.JPG',
      alt: "Festival Moment 9",
      photographer: {
        name: "Martin",
        instagram: ""
      }
    },
    {
      url: '/wallpapers/Martin10.JPG',
      alt: "Festival Moment 10",
      photographer: {
        name: "Martin",
        instagram: ""
      }
    },
    {
      url: '/wallpapers/Martin11.JPG',
      alt: "Festival Moment 11",
      photographer: {
        name: "Martin",
        instagram: ""
      }
    },
    {
      url: '/wallpapers/Martin13.JPG',
      alt: "Festival Moment 13",
      photographer: {
        name: "Martin",
        instagram: ""
      }
    },
    {
      url: '/wallpapers/Martin14.JPG',
      alt: "Festival Moment 14",
      photographer: {
        name: "Martin",
        instagram: ""
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<number[]>([0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const changeSlide = useCallback((newIndex: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(newIndex);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

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
          setLoadedImages(prev => [...prev, index]);
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
      <div className="w-full bg-cos-main-orange">
        <div className="relative w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out
                                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                                ${loadedImages.includes(index) ? '' : 'invisible'}`}
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
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50
                        text-cos-off-black p-2 rounded-full backdrop-blur-sm
                        transition-all duration-200 disabled:opacity-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50
                        text-cos-off-black p-2 rounded-full backdrop-blur-sm
                        transition-all duration-200 disabled:opacity-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
            <div
                className="h-full bg-cos-off-black transition-transform duration-[6000ms] ease-linear"
                style={{
                  transform: `scaleX(${isPaused ? 1 : 0})`,
                  transformOrigin: 'left'
                }}
            />
          </div>
        </div>
      </div>
  );
};

export default GallerySection;