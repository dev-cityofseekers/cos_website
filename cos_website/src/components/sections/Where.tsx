
function Where() {
  return (
    <div className="w-full">

      <div className="font-omnes text-center text-4xl pb-14 pt-10">
        Where is the Festival?
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left Half: Google Maps (iframe) */}
        <div className="md:w-1/2 ">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.489903232795!2d9.294895994689943!3d52.10721447352421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba893a3da22bd7%3A0xb6d1bbff80b3bb07!2sJugend-Zeltplatz%20Alpha%20One%20-%20Ein%20gro%C3%9Fer%20Zeltplatz%20mit%20einem%20einmaligen%20Konzept%20zentral%20in%20Deutschland!5e0!3m2!1sde!2sat!4v1699526525515!5m2!1sde!2sat"            loading="lazy"
            title="googlemaps"
          />
          {/*
          <div className="pt-5">
            The campsite is located near the beautiful Hamelin in Saxony, Germany
  </div>*/}
        </div>

        {/* Right Half: Image */}
        <div className="md:w-1/2">
          <img
            src="/wallpapers/Martin03.JPG"
            alt="guy"
            className="w-full"
            id="right_image"
          />
        </div>
      </div>

    </div>
  );
}




export default Where;
