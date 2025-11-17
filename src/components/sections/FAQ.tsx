import { useTranslation, Trans } from "react-i18next";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const FAQ = () => {
  const { t } = useTranslation();
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    setOpenQuestions(
      openQuestions.includes(index)
        ? openQuestions.filter((i) => i !== index)
        : [...openQuestions, index]
    );
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto my-8 p-6">
        <h2 className="text-2xl font-semibold mb-4 font-omnes">{t("faq.title")}</h2>
        <div>
          {[...Array(14)].map((_, index) => (
            <div key={index} className="mb-4 rounded-md select-none text-lg">
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span className="font-omnes">{t(`faq.q${index + 1}.question`)}</span>
                {openQuestions.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openQuestions.includes(index) && (
                <div className="p-4">
                  {index === 2 ? (
                    <Trans i18nKey={`faq.q${index + 1}.answer`}>
                      Yes, we have a Ruleset or Code of Conduct to clarify how we want to treat each
                      other, find it{" "}
                      <a href="/code" className="text-blue-500 underline">
                        here
                      </a>{" "}
                      or under{" "}
                      <a href="/code" className="text-blue-500 underline">
                        cityofseekers.eu/code
                      </a>
                      .
                    </Trans>
                  ) : (
                    t(`faq.q${index + 1}.answer`)
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
