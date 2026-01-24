import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import { teamMembers } from "../data/teamMembers";

function Team() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cos-main-orange">
      <Header />

      {/* Content */}
      <div className="container mx-auto p-6 pt-28 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 font-omnes">{t("team.title")}</h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">{t("team.subtitle")}</p>
        </div>

        {/* Team Photo */}
        <div className="mb-12">
          <img
            src="/images/team/teamfoto.png"
            alt="The City of Seekers team together"
            className="rounded-xl shadow-lg w-full h-auto mx-auto"
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold font-omnes">{member.name}</h3>
                <p className="text-gray-600 text-sm font-medium">{member.role}</p>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default Team;
