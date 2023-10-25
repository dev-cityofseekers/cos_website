import React from "react";

function DataPolicy() {
  return (
    <div className="w-full bg-cos-main-orange">
      <div className="w-full flex justify-center">
        <a
          href="/"
          className="fixed w-4/12 mt-7 bg-gradient-background-image text-white p-4 px-10 z-10  justify-center rounded-full"
        >
          Home
        </a>
      </div>
      <div className="max-w-4xl mx-auto p-4 pt-28">
        <h1 className="text-3xl font-bold mb-4">Data Policy</h1>

        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          Welcome to City Of Seekers! Your privacy is important to us, and we
          are committed to protecting the personal information you choose to
          share with us. This Data Policy explains the types of information we
          collect, how we use it, and the measures we take to keep your
          information safe.
        </p>

        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We only collect information that you voluntarily provide to us. This
          may include:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>
            <strong>Contact Information</strong>: When you get in touch with us
            via our contact form or sign up for our newsletter, we may collect
            your name, email address, and any other information you choose to
            provide.
          </li>
          <li>
            <strong>Transaction Information</strong>: If you purchase a ticket
            to our festival, we will collect necessary information to process
            the transaction, such as your name, email address, and payment
            details.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4">We use the information you provide to:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Respond to your inquiries and provide customer support.</li>
          <li>
            Process transactions and send you related information, including
            confirmations and receipts.
          </li>
          <li>
            Keep you updated about the festival, including announcements,
            updates, and any changes to the event.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="mb-4">
          We take the security of your personal information seriously and
          implement a variety of security measures to help protect it. However,
          no method of transmission over the Internet, or method of electronic
          storage, is 100% secure. While we strive to use commercially
          acceptable means to protect your personal information, we cannot
          guarantee its absolute security.
        </p>

        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal
          information at any time. If you wish to exercise these rights, please
          contact us at{" "}
          <a href="mailto:info@cityofseekers.eu" className="text-blue-500">
            info@cityofseekers.eu
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Data Policy from time to time. We will notify you
          of any changes by posting the new policy on our website. You are
          advised to review this Data Policy periodically for any changes.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions about this Data Policy, please contact us at{" "}
          <a href="mailto:info@cityofseekers.eu" className="text-blue-500">
            info@cityofseekers.eu
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default DataPolicy;
