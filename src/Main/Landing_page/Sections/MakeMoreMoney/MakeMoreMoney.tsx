import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import "./MakeMoreMoney.css";
import money from "../../../../assets/HeroPage/ServiceOptions/money.png";
import SubscribeModal from "../../SubscribeModal/SubscribeModal";

const MakeMoreMoney: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="make-more-money">
      <div className="make-more-money-content">
        <div className="make-more-money-image">
          <img src={money} alt="Gadget Website" />
        </div>
        <div className="make-more-money-text">
          <h1>Make More Money with Your Free Gadget Website</h1>
          <p>
            With SafeGad, you can create your own free website today. Take
            online orders for pickup, delivery, and contactless in-person
            shopping.
          </p>
          <ul className="make-more-money-features">
            <li>
              <FaCircleCheck className="check-icon" />
              Get your online ordering page up fast. Upload your gadgets and
              your website can be live in minutes, ready to take online orders.
            </li>
            <li>
              <FaCircleCheck className="check-icon" />
              Manage your online orders in one spot. Your personal store counter
              allows you to always know the status of any order.
            </li>
            <li>
              <FaCircleCheck className="check-icon" />
              Built-in integration lets you create shoppable posts to let
              customers purchase from the app.
            </li>
          </ul>
          <div className="make-more-money-cta">
            <button className="hero-cta-btn-primary" onClick={openModal}>
              Sign Up for Free
            </button>
            {/* <div className="contact-support">
              <p>Contact Support</p>
            </div> */}
          </div>
        </div>
      </div>
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default MakeMoreMoney;
