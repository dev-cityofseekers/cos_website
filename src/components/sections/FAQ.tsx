import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  questions: FAQQuestion[];
}

const FAQ = () => {
  const { t } = useTranslation();
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const [openCategories, setOpenCategories] = useState<string[]>(["general"]);

  const categories = [
    "general",
    "tickets",
    "camping",
    "food",
    "workshops",
    "community",
    "travel",
    "practical",
  ];

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(
      openQuestions.includes(questionId)
        ? openQuestions.filter((id) => id !== questionId)
        : [...openQuestions, questionId]
    );
  };

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(
      openCategories.includes(categoryId)
        ? openCategories.filter((id) => id !== categoryId)
        : [...openCategories, categoryId]
    );
  };

  return (
    <div className="bg-cos-main-orange">
      <div className="bg-cos-off-black rounded-b-3xl py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 font-omnes text-center text-white">
            {t("faq.title")}
          </h2>

          <div className="space-y-3">
            {categories.map((categoryKey) => {
              const category = t(`faq.categories.${categoryKey}`, {
                returnObjects: true,
              }) as FAQCategory;
              const isCategoryOpen = openCategories.includes(categoryKey);

              return (
                <div
                  key={categoryKey}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  {/* Category Header */}
                  <button
                    className="w-full flex justify-between items-center p-5 hover:bg-white/5 transition-colors duration-200"
                    onClick={() => toggleCategory(categoryKey)}
                    aria-expanded={isCategoryOpen}
                  >
                    <h3 className="font-omnes text-lg sm:text-xl text-white font-semibold">
                      {category.title}
                    </h3>
                    {isCategoryOpen ? (
                      <FaChevronUp className="text-cos-orange flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-white/40 flex-shrink-0" />
                    )}
                  </button>

                  {/* Questions */}
                  {isCategoryOpen && (
                    <div className="divide-y divide-white/10">
                      {category.questions.map((q, qIndex) => {
                        const questionId = `${categoryKey}-${qIndex}`;
                        const isOpen = openQuestions.includes(questionId);

                        return (
                          <div key={questionId} className="select-none">
                            <button
                              className="w-full flex justify-between items-center p-4 hover:bg-white/5 transition-colors duration-200 text-left"
                              onClick={() => toggleQuestion(questionId)}
                              aria-expanded={isOpen}
                            >
                              <span className="font-omnes text-white/90 pr-4">{q.question}</span>
                              {isOpen ? (
                                <FaChevronUp className="text-cos-orange flex-shrink-0" />
                              ) : (
                                <FaChevronDown className="text-white/30 flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-4 pb-4 text-white/60 whitespace-pre-line leading-relaxed">
                                {q.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Code of Conduct Link */}
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href="/code"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cos-orange text-cos-off-black rounded-full font-omnes hover:bg-cos-main-orange transition-colors duration-300"
            >
              📜 Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
