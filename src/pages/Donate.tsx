import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import { DONATION } from "../config/constants";
import { FaHeart, FaUniversity } from "react-icons/fa";

function Donate() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bankDetails = [
    { label: t("donate.bank.accountHolder"), value: DONATION.ACCOUNT_HOLDER },
    { label: t("donate.bank.iban"), value: DONATION.IBAN },
    { label: t("donate.bank.bic"), value: DONATION.BIC },
    { label: t("donate.bank.reference"), value: t("donate.bank.referenceValue") },
  ];

  return (
    <div className="min-h-screen bg-cos-main-orange">
      <Header />

      <div className="container mx-auto p-6 pt-36 max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 font-omnes">{t("donate.title")}</h1>
          <p className="text-gray-700 text-lg">{t("donate.subtitle")}</p>
        </div>

        {/* Why donate */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-3">
            <FaHeart className="text-2xl text-cos-orange" />
            <h2 className="text-xl font-semibold font-omnes">{t("donate.why.title")}</h2>
          </div>
          <p className="text-gray-700 text-lg">{t("donate.intro")}</p>
        </div>

        {/* Bank transfer details */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-3">
            <FaUniversity className="text-2xl text-cos-orange" />
            <h2 className="text-xl font-semibold font-omnes">{t("donate.bank.title")}</h2>
          </div>
          <dl className="text-gray-700 text-lg space-y-2">
            {bankDetails.map(({ label, value }) => (
              <div key={label}>
                <dt className="inline font-semibold">{label}: </dt>
                <dd className="inline">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-center text-xl font-omnes">{t("donate.thanks")}</p>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default Donate;
