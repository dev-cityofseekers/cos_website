import Footer from "../components/Footer";

function TicketPage() {
  return (
    <div className="h-full w-full bg-cos-main-orange">
      <div className="pt-4">
        <a href="/" className="flex justify-center items-center pt-8">
          <div className="bg-cos-sea-blue text-white font-bold py-4 px-8 rounded-full">
            {"< Back"}
          </div>
        </a>
        <iframe
          className="mx-auto w-full"
          src="https://docs.google.com/forms/d/e/1FAIpQLSddrwFYzIrBQgd_hifLTc0HnmS8KYniKvJz8_vEFO_xLpuu6Q/viewform?embedded=true"
          height="1000"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
}
export default TicketPage;
