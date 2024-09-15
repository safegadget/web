import { FaArrowRight } from "react-icons/fa"; // Import the arrow left icon
import "./GadgetRecommendation.css"; // Import the styles
import down from "../../../../../assets/HeroPage/ServiceOptions/down.png";
import SubscribeModal from "../../../SubscribeModal/SubscribeModal";
import React, { useState } from "react";

type Props = {};

const GadgetRecommendation: React.FC<Props> = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="gadget-recommendation">
      {/* Left section with the image */}
      <div className="gadget-left">
        <img
          src={down} // Replace with the actual image URL
          alt="Gadget"
          className="service-image"
        />
      </div>

      {/* Right section with the heading, description, and CTA */}
      <div className="gadget-right">
        <h1 className="gadget-h1">Buy a new gadget</h1>
        <p className="gadget-p">
          We offer a curated selection of the latest gadgets from top brands and
          trusted vendors. We provide detailed product information, competitive
          pricing, and personalized recommendations to help customers make
          informed purchasing decisions.
        </p>
        <h6 className="service-heading" onClick={openModal}>
          Buy a new gadget <FaArrowRight className="arrow-icon" />
        </h6>
      </div>
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default GadgetRecommendation;
