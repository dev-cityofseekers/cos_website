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
      answer: "We have got you covered for snacks and drinks. For everything else make sure to bring enough supplies.",
    },
    {
      question: "What does the ticket price cover?",
      answer: "The price covers the entry to the location , all infrastructure as well as all workshops. For our guests the evening program is free. Food, drinks, and transportation are not included in the ticket price. The ticket price is calculated to cover all expenses of the festival without making any profit. ",
    },
    {
      question: "What about food?",
      answer: "Please bring everything you need to cook/prepare your own meals. There will be a campfire for BBQ. Last year we had a pizza night where we ordered from a local restaurant. There'll be a bar with a variety of snacks, beer and, wine for purchase at a fair price.",
    },
    {
      question: "Do you need volunteers?",
      answer: "Not per se. But, if you are interested in helping or hosting a workshop please feel free to reach out to us.",
    },
    {
      question: "Animals",
      answer: "Festivals are not the preferred environment for animals. We trust that you are aware of the responsibility for your animal and leave the decision up to you whether your animals can handle it to be in a festival environment.",
    },
    {
      question: "Cancellation Policy",
      answer: "Tickets that have already been paid for will not be refunded.  If you are no longer able to attend and would like to sell your ticket to a friend, please let us know that person's new name and information.  Tickets are only valid with the correct name on them.  If you can't find anyone for your ticket, please email us.  If we have people on the waiting list, we can help you sell them.",
    },
    {
      question: "Liablility and Theft",
      answer: "City of Seekers is not responsible for damage and theft of personal property of attendees.  While we will do our best to promote a safe environment we can not guarantee that nothing will be damaged or stolen. Ty for not stealing <3.",
    },
    {
      question: "Nature",
      answer: "With our festival, we try to burden the environment as little as possible.  For this, we need your help.  Please respect nature and the environment on the campsite and in the surrounding area.  That means: Please throw rubbish (bottles, cigarettes, etc.) in the trashcan and not in nature.  Cigarettes and glass in particular are not only pollution, but they also increase the risk of forest fires.",
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
