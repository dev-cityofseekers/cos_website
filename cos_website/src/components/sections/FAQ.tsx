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
        "City Of Seekers is run by a young, motivated team united through the global YesFam community, originally inspired by the YouTube channel Yes Theory. This community believes in challenging comfort zones to fully experience life. While our event is not directly connected to the YesFam community or Yes Theory, we share the same vision: to create connections and learn new things by seeking discomfort.",
    },
    {
      question: "Who is it for?",
      answer:
        "City of Seekers is an event to welcome people of all ages, genders, races & religions. A place to create new friendships, constructively seek discomfort and challenge yourself among a group of like-minded people.",
    },
    {
      question: "When is it happening?",
      answer:
        "City of Seekers 24 will happen for the second time from June 6th to 9th of 2024",
    },
    {
      question: "Arrival & departure",
      answer:
        "More details will be announced closer to the event. Arrival will start in the afternoon of the 6th of June. You can come by car, train, bike or whatever you feel like. We’d ask you to departure around noon on the 9th of June.",
    },

    {
      question: "Is there a schedule",
      answer:
        "The detailed schedule will be released closer to the event date. Keep an eye on our Instagram for the latest updates.",
    },
    {
      question: "Will there be food and drinks?",
      answer:
        "We will sell a selection of snacks like chips, sweets or nuts as well as water, sodas and beers. We will have a BYOF BBQ (bring your own food) and a pizza night on one evening each. Please bring your own food for the rest of the days. More details will follow.",
    },
    {
      question: "What does the ticket price cover?",
      answer:
        "The ticket price includes entry, access to all infrastructure and workshops, and free evening programs. It does not cover food, drinks, and transportation. The ticket price is set to cover our expenses for COS without taking profit.",
    },
    {
      question: "What about food?",
      answer:
        "Please bring your own cooking supplies for meal preparation. A campfire will be available for BBQ. Last year, we also organized a pizza night with orders from a local restaurant.",
    },
    {
      question: "Do we need volunteers?",
      answer:
        "We don't specifically require volunteers. However, if you're interested in helping or hosting a workshop, feel free to reach out to us. If we need volunteers we will communicate that over our instagram/website.",
    },
    {
      question: "Animals",
      answer:
        "While animals are not typically suited for such environments, we leave the decision to bring them to your discretion. Please be mindful of your responsibility for their well-being. If your Animal puts other guests/animals at risk you will have to leash it.",
    },
    {
      question: "Cancellation Policy",
      answer:
        "Paid tickets are non-refundable. If you need to transfer your ticket to someone else, please inform us with their details for validation. If you're unable to attend and can't find a replacement, contact us. We may assist if there's a waiting list.",
    },
    {
      question: "Liability and Theft",
      answer:
        "City of Seekers is not liable for damage or theft of personal belongings. We strive for a safe environment but cannot guarantee the security of personal items. Please take care of your belongings.",
    },
    {
      question: "Nature",
      answer:
        "With our event, we try to burden the environment as little as possible. For this, we need your help. Please respect nature and the environment on the campsite and in the surrounding area. That means: Please throw rubbish (bottles, cigarettes, etc.) in the trashcan and not in nature. Cigarettes and glass in particular are not only pollution, but they also increase the risk of forest fires.",
    },
    {
      question: "Do we have Rules?",
      answer: (
        <span>
          Yes, we have a Ruleset or Code of Conduct to clarify how we want to treat each other, find it{" "}
          <a href="/codeofconduct" className="text-blue-500 underline">
            here
          </a>
          {" "}or under <a href="https://cityofseekers.eu/code" className="text-blue-500 underline">cityofseekers.eu/code</a>.
        </span>
      ),
    },
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
                <div className="p-4">
                  {typeof item.answer === "string" ? item.answer : item.answer}
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
