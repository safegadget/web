import React, { useState } from "react";
import "./Hero.css";
import SubscribeModal from "../SubscribeModal/SubscribeModal";

type Props = {
  header: string;
  description: string;
  ctaText: string;
  imageUrlTop: string;
  //onCtaClick: () => void;
  headerOne: any;
  headerTwo: any;
};

const Hero: React.FC<Props> = ({
  header,
  description,
  ctaText,
  imageUrlTop,
  headerOne,
  headerTwo,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="hero">
      {/* Left section with the image */}
      <div className="hero-left">
        <img src={imageUrlTop} alt="Hero" className="hero-image" />
      </div>

      {/* Right section with the header, description, and buttons */}
      <div className="hero-right">
        <h1 className="hero-h1-mini">
          {header}
          {headerOne} {headerTwo}
        </h1>
        <h1 className="hero-h1">
          {header}
          <br />
          {headerOne} <br /> {headerTwo}
        </h1>
        <p className="hero-p">{description}</p>
        <div className="hero-cta-buttons">
          <button onClick={openModal} className="hero-cta-btn-primary">
            {ctaText}
          </button>
          <button onClick={openModal} className="hero-cta-btn-secondary">
            Repair your Gadget
          </button>
        </div>
        {/* Render the SubscribeModal */}
        <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Hero;
