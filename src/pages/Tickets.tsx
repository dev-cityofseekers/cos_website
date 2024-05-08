

function TicketPage() {
  return (
    <div className="h-screen w-full bg-cos-main-orange flex flex-col">
      {/* Der Link wird auf mobilen Geräten am unteren Rand und auf größeren Bildschirmen oben angezeigt */}
      <a href="/" className="absolute h-12 w-max sm:top-8 sm:left-8 bottom-0 sm:w-auto  bg-cos-sea-blue text-white font-bold text-center rounded-t-full sm:rounded-full hidden sm:flex justify-center items-center pl-8 pr-8">
        {"Back"}
      </a>
      <iframe
        className="flex-grow responsive-iframe mx-auto w-full"
        src="https://docs.google.com/forms/d/e/1FAIpQLSddrwFYzIrBQgd_hifLTc0HnmS8KYniKvJz8_vEFO_xLpuu6Q/viewform?embedded=true"
        loading="lazy"
      >
        Loading…
      </iframe>

      {/* Mobile only: Button am unteren Rand */}
      <a href="/" className="sm:hidden block w-full py-4 bg-cos-sea-blue text-white font-bold text-center rounded-t-full">
        { "Back"}
      </a>
    </div>
  );
}

export default TicketPage;
