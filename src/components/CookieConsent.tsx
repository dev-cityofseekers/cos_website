interface CookieConsentProps {
  setConsent: (consent: string | null) => void;
}

function CookieConsent({ setConsent }: CookieConsentProps) {
  const handleAccept = () => {
    localStorage.setItem("googleMapsConsent", "accepted");
    setConsent("accepted");
  };

  const handleReject = () => {
    localStorage.setItem("googleMapsConsent", "rejected");
    setConsent("rejected");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-80 py-4 px-6 text-white flex justify-between items-center z-50">
      <p className="text-sm md:text-base">
        This site uses Google Maps. By accepting, you agree to Google Maps' cookies.
        <a href="/privacy-policy" className="text-yellow-500 hover:text-yellow-300 ml-2">
          Learn more
        </a>
        .
      </p>
      <div>
        <button
          onClick={handleAccept}
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline mr-1"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
