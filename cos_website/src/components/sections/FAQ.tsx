import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
//images
import aboveFaqSvg from "../images/FAQ_border.svg";

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const questions = [
    {
      question: "What is XYZ?",
      answer: "XYZ is a product that helps you do ABC.",
    },
    {
      question: "How do I use XYZ?",
      answer: "You can use XYZ by following these steps...",
    },
    // ... more questions
  ];

  const toggleAnswer = (currentIndex: number) => {
    if (openQuestions.includes(currentIndex)) {
      setOpenQuestions(openQuestions.filter((index) => index !== currentIndex));
    } else {
      setOpenQuestions([...openQuestions, currentIndex]);
    }
  };

  return (
    <div>
      <img src={aboveFaqSvg} className="w-full" alt="FAQ border" />
      <div className="max-w-2xl mx-auto my-8 p-6">
        <h2 className="text-2xl font-semibold mb-4 font-omnes">
          Frequently Asked Questions
        </h2>
        <div>
          {questions.map((item, index) => (
            <div key={index} className="mb-4 rounded-md">
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span className="font-omnes">{item.question}</span>
                {openQuestions.includes(index) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
              {openQuestions.includes(index) && (
                <div className="p-4">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
