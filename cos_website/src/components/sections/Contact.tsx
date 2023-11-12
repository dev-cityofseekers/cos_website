
function Contact() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="font-omnes text-4xl pb-4">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or feedback?<br/>
          Text us on{" "} <a
            className="text-cos-blue hover:underline"
            href="https://instagram.com/cityofseekers"
          >Instagram</a> or send us an email{' '}
          <a
            className="text-cos-blue hover:underline"
            href="mailto:info@cityofseekers.eu"
          >
            info@cityofseekers.eu
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Contact;
