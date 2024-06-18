function Welcome() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/images/welcome_sun_left_crop.JPG"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute top-0 w-full h-full flex items-center justify-center drop-shadow-lg">

        <div className="w-4/12 ">
          <img
            src="/images/logo_white_transparent.png"
            className="mx-auto pt-8"
            alt="Logo_black"
          />
          <div className="text-white font-omnes text-center text-4xl lg:text-6xl">
            June 19-22 2025
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Welcome;

/**
 * <a href="/tickets" className="flex justify-center items-center pt-3">
            <div className="bg-cos-main-orange text-cos-off-black text-xl font-bold py-5 px-10 rounded-full hover:bg-primary-dark hover:scale-105 transition duration-300 ease-in-out shadow-white">
              Buy Tickets
            </div>
          </a>
*/