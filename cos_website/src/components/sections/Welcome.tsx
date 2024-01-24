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
            June 6-9 2024
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
