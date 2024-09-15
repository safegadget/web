import { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import "./Testimonials.css";
import man from "../../../../../assets/HeroPage/ServiceOptions/man.png";
import woman from "../../../../../assets/HeroPage/ServiceOptions/woman.png";

type Testimonial = {
  id: number;
  image: string;
  text: string;
  name: string;
  jobTitle: string;
  bgColor: string;
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    image: woman, // Replace with actual image
    text: "Running a business means I can’t afford downtime with my gadgets. SafeGad’s protection plan gave me peace of mind, knowing that my devices are covered. When my phone was accidentally damaged, their quick repair service got me back on track without any hassle. The personalized gadget recommendations were spot on too!",
    name: "Esther Yemisi",
    jobTitle: "Small Business Owner",
    bgColor: "#FFEDED",
  },
  {
    id: 2,
    image: man, // Replace with actual image
    text: "SafeGad’s repair service is outstanding! I received my repaired device within 48 hours, and it’s working perfectly. The protection plans give me the confidence that my gadgets are safe and secure.",
    name: "John Doe",
    jobTitle: "Entrepreneur",
    bgColor: "#F6F5FF",
  },
  {
    id: 3,
    image: woman, // Replace with actual image,
    text: "As someone who’s always upgrading gadgets, SafeGad’s recommendations have been extremely helpful. Their selection process is on point, and the protection plans are great for someone like me who travels a lot.",
    name: "Jane Smith",
    jobTitle: "Tech Enthusiast",
    bgColor: "#E3F5EE",
  },
  {
    id: 4,
    image: man, // Replace with actual image
    text: "The customer support at SafeGad is top-notch! Their repair service is fast, and the pricing for their gadgets is competitive. Highly recommended for all gadget lovers!",
    name: "Michael Adebayo",
    jobTitle: "Freelancer",
    bgColor: "#F6F7FA",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
    scrollToCurrentIndex();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
    scrollToCurrentIndex();
  };

  const scrollToCurrentIndex = () => {
    const container = document.querySelector(
      ".testimonial-container"
    ) as HTMLElement;
    if (container) {
      const cardWidth = container.children[0].getBoundingClientRect().width;
      container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="testimonials">
      <FaCircleArrowLeft className="arrow-icon-left" onClick={handlePrev} />
      <div className="testimonial-container">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card"
            style={{ backgroundColor: testimonial.bgColor }}
          >
            <div className="testimonial-left">
              <img
                src={testimonial.image}
                alt="Client"
                className="testimonial-image"
              />
            </div>
            <div className="testimonial-right">
              <h1 className="testimonial-quote">“</h1>
              <p className="testimonial-text">{testimonial.text}</p>
              <h5 className="testimonial-client">{testimonial.name}</h5>
              <p className="testimonial-jobTitle">{testimonial.jobTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <FaCircleArrowRight className="arrow-icon-right" onClick={handleNext} />
    </div>
  );
};

export default Testimonials;
