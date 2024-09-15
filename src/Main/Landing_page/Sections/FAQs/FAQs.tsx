import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import "./FAQs.css";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What devices are eligible for SafeGad's protection plans?",
    answer:
      "SafeGad's protection plans cover a wide range of gadgets including smartphones, tablets, laptops, and other valuable electronics. If you have a gadget you want to protect, chances are it's eligible.",
  },
  {
    question: "How does Dr Fix provide personalized gadget recommendations?",
    answer:
      "Dr Fix uses advanced algorithms and user input to provide personalized recommendations. By analyzing your gadget usage and needs, Dr Fix suggests products and services tailored to you.",
  },
  {
    question:
      "Do I need to have a protection plan to use SafeGad's repair services?",
    answer:
      "No, you don’t need a protection plan to use our repair services. However, having a protection plan may provide additional benefits and coverage.",
  },
  {
    question: "What kind of warranty do you offer on repairs?",
    answer:
      "We offer a standard warranty on all repairs, covering parts and labor. The specific duration and terms of the warranty vary depending on the type of repair performed.",
  },
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs">
      <div className="faqs-header">
        <h1>Frequently Asked Questions?</h1>
        <p>All your questions answered</p>
      </div>
      <div className="faqs-accordion">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <div>
                <AiOutlineQuestionCircle className="faq-icon" />
                <span style={{ textAlign: "left" }}>{faq.question}</span>
              </div>{" "}
              {openIndex === index ? (
                <MdOutlineKeyboardArrowLeft className="faq-arrow" />
              ) : (
                <MdOutlineKeyboardArrowRight className="faq-arrow" />
              )}
            </div>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
