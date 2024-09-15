import React, { useState } from "react";
import "./GetStarted.css";
import exampleImage from "../../../../assets/HeroPage/ServiceOptions/getstarted.png"; // Replace with your image path
import SubscribeModal from "../../SubscribeModal/SubscribeModal";

const GetStarted: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="get-started">
      <div className="get-started-content">
        <div className="get-started-text">
          <h1>Ready to get started? 👋</h1>
          <p>
            By choosing SafeGad, you're not just protecting your devices, you're
            investing in peace of mind, cost savings, and cutting-edge
            technology that keeps your gadgets in peak condition.
          </p>
          <button className="cta-button" onClick={openModal}>
            Sign Up Now
          </button>
        </div>
        <div className="get-started-image">
          <img src={exampleImage} alt="Get Started" />
        </div>
      </div>
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default GetStarted;
