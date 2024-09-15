import React, { useState } from "react";
import "./WhyChooseUs.css";
import blueIcon from "../../../../assets/HeroPage/ServiceOptions/blueIcon.png";
import greenIcon from "../../../../assets/HeroPage/ServiceOptions/greenIcon.png";
import purpleIcon from "../../../../assets/HeroPage/ServiceOptions/purpleIcon.png";
import SubscribeModal from "../../SubscribeModal/SubscribeModal";

type CardProps = {
  image: string;
  heading: string;
  text: string;
};

const Card: React.FC<CardProps> = ({ image, heading, text }) => (
  <div className="whychooseus-card">
    <img src={image} alt={heading} className="whychooseus-card-image" />
    <h3 className="whychooseus-card-heading">{heading}</h3>
    <p className="whychooseus-card-text">{text}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="whychooseus">
      <div className="whychooseus-header">
        <h1>Why SafeGad?</h1>
        <button className="whychooseus-cta-btn" onClick={openModal}>
          Get Started
        </button>
      </div>
      <div className="whychooseus-cards">
        <Card
          image={blueIcon} // Replace with actual image
          heading="Affordable protection plans with you in mind!"
          text="Our protection plans are designed to offer comprehensive coverage at competitive prices. Whether you're a student, a professional, or a business owner, we have a plan that fits your needs and budget."
        />
        <Card
          image={greenIcon} // Replace with actual image
          heading="Discounts on future gadget purchases and repairs"
          text="Our protection plans are designed to offer comprehensive coverage at competitive prices. Whether you're a student, a professional, or a business owner, we have a plan that fits your needs and budget."
        />
        <Card
          image={purpleIcon} // Replace with actual image
          heading="Get an online diagnosis with Dr Fix  AI-Assisted technician"
          text="Dr Fix provides instant online diagnostics, helping you identify potential issues with your devices before they become major problems. Dr Fix quickly assesses the situation, offering expert recommendations and solutions."
        />
      </div>
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default WhyChooseUs;
