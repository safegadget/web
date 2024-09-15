import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow right icon
import "./ServiceOptions.css"; // Import the styles
import imgLeft from "../../../../../assets/HeroPage/ServiceOptions/Img.png";
import imgRight from "../../../../../assets/HeroPage/ServiceOptions/left.png";
import SubscribeModal from "../../../SubscribeModal/SubscribeModal";

type Props = {};

const ServiceOptions: React.FC<Props> = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="service-options">
      {/* Left div with protection plans */}
      <div className="service-left">
        <img
          src={imgRight} // Replace with the actual image URL
          alt="Protection Plan"
          className="service-image"
        />
        <p className="service-description">
          We offer flexible protection plans that cover a wide range of gadgets,
          including smartphones, tablets, laptops, and other valuable gadgets.
          Our plans safeguard against accidental damage, theft, and
          malfunctions, ensuring that customers can quickly recover from any
          setbacks and get back on track.
        </p>
        <h6 className="service-heading" onClick={openModal}>
          Protect your gadget <FaArrowRight className="arrow-icon" />
        </h6>
      </div>

      {/* Right div with repair services */}
      <div className="service-right">
        <img src={imgLeft} alt="Repair Service" className="service-image" />
        <p className="service-description">
          We provide fast and reliable repair services for all types of gadgets
          via our trusted and expert technicians. We ensure our repairs are done
          using high-quality parts and offer warranties, guaranteeing customer
          satisfaction and long-term device performance.
        </p>
        <h6 className="service-heading" onClick={openModal}>
          Repair your gadget <FaArrowRight className="arrow-icon" />
        </h6>
      </div>
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ServiceOptions;
