import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
//images
//import aboveFaqSvg from "../images/FAQ_border.svg";

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const questions = [
    {
      question: "Who is running City Of Seekers?",
      answer:
        "We are a young and motivated team that came together through the global YesFam community, which was originally created by the successful Youtube channel Yes Theory. Even though our festival is not directly connected to the community or the channel, we share the same vision: Create connections, learn new things by seeking discomfort.",
    },
    {
      question: "Who is it for?",
      answer:
        "City of Seekers is a festival to welcome people of all ages, genders, races & religions. A place to create new friendships, constructively seek discomfort and challenge yourself among a group of like-minded people.",
    },
    {
      question: "When is it happening?",
      answer: "6. - 9. June 2024",
    },
    {
      question: "Arrival & Depature",
      answer: "",
    },
    {
      question: "Is there a schedule",
      answer:
        "The schedule will be released closer to the date of the festival, follow our Instagram to keep up to date with the latest news.",
    },
    {
      question: "Will there be food and drinks?",
      answer: "We have got you covered for sweets and drinks. For everything else make sure to bring enough supplies.",
    },
    {
      question: "",
      answer: "",
    },
    {
      question: "",
      answer: "",
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

//<img src="/images/FAQ_border.svg" className="w-full" alt="FAQ border" />

  return (
    <div>
      
      <div className="max-w-2xl mx-auto my-8 p-6">
        <h2 className="text-2xl font-semibold mb-4 font-omnes">
          Frequently Asked Questions
        </h2>
        <div>
          {questions.map((item, index) => (
            <div key={index} className="mb-4 rounded-md select-none text-lg">
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
