function What() {
  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      {/* Left Image (visible on larger screens) */}
      <img
        src="/wallpapers/Martin02.JPG"
        alt="guy"
        className="w-full md:w-1/2 object-cover md:block hidden"
        id="left_image"
      />

      <div className="w-full md:w-1/2 flex flex-col">
        <div className="m-10 grow">
          <div className="text-cos-off-black font-omnes text-center text-4xl">
            City of Seekers
          </div>
          <div className="text-cos-off-black text-2xl pt-7">
            City of Seekers is a space for people to make new connections and
            deepen existing ones, all in an open and fun surrounding where it is
            easy to get into contact with strangers / new friends.
            <br />
            <br />
            Over four days, you can enjoy great workshops during the day, live
            music and amazing DJ's who will make you dance the night away, a fun
            challenge which will get you out of your comfort zone and relaxed
            moments at the campfires or on our cozy sofas.
          </div>
        </div>
        {/* Right Bottom Image (always visible) */}
        <img
          src="/wallpapers/Martin07.JPG"
          alt="guy"
          className="w-full object-cover overflow-hidden"
          id="right_bottom_image"
        />
      </div>
    </div>
  );
}

export default What;
