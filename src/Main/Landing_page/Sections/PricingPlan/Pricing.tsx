import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Pricing.css";
import SubscribeModal from "../../SubscribeModal/SubscribeModal";

type PricingPlanProps = {
  title: string;
  price: string;
  backgroundColor: string;
  ctaText: string;
  ctaBgColor?: string;
  coverage: string[];
  onCtaClick: () => void; // Add onCtaClick prop
};

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  price,
  backgroundColor,
  ctaText,
  coverage,
  ctaBgColor,
  onCtaClick, // Receive the onCtaClick prop
}) => (
  <div
    className="pricing-plan"
    style={{
      backgroundColor,
      border: ctaBgColor === "#6a48fa" ? "none" : `1px solid #66666624`,
    }}
  >
    <h2 className="pricing-plan-title">{title}</h2>
    <p className="pricing-plan-price">
      {/* <span className="naira-sign">₦</span> */}
      {price}
      <span className="naira-sign" style={{ fontWeight: 300, marginLeft: 4 }}>
        quarterly
      </span>
    </p>
    <br />
    <button
      className="pricing-plan-cta"
      style={{
        borderColor: ctaBgColor === "#6a48fa" ? "#6a48fa" : "#666",
        backgroundColor: ctaBgColor === "#6a48fa" ? "#6a48fa" : "transparent",
        color: ctaBgColor === "#6a48fa" ? "#fff" : "#666",
      }}
      onClick={onCtaClick} // Add onClick handler
    >
      {ctaText} <FaArrowRight />
    </button>
    <br />
    <h4 className="pricing-plan-coverage-title">Coverage</h4>
    <ul className="pricing-plan-coverage">
      {coverage.map((item, index) => (
        <li key={index} className="pricing-plan-coverage-item">
          <span className="check-icon">&#10003;</span> {item}
        </li>
      ))}
    </ul>
  </div>
);

const Pricing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="pricing">
        <div className="pricing-grid">
          <PricingPlan
            title="Silver Product"
            price="₦2,500"
            backgroundColor="white"
            ctaText="Choose Silver Product"
            ctaBgColor="transparent"
            coverage={[
              "Fixes for accidental damage (like drops and spills)",
              "Screen repair or replacement",
              "Coverage limit: Up to ₦25,000 per quarter",
            ]}
            onCtaClick={openModal} // Pass the openModal function
          />
          <PricingPlan
            title="Gold Product"
            price="₦5,000"
            backgroundColor="#F7F6FF"
            ctaText="Choose Gold"
            ctaBgColor="#6a48fa"
            coverage={[
              "Fixes for accidental damage (like drops and spills)",
              "Screen repair or replacement",
              "Water damage repair",
              "Coverage limit: Up to ₦50,000 per quarter",
            ]}
            onCtaClick={openModal} // Pass the openModal function
          />
          <PricingPlan
            title="Platinum Elite"
            price="₦10,000"
            backgroundColor="white"
            ctaText="Choose Platinum"
            ctaBgColor="transparent"
            coverage={[
              "Fixes for accidental damage (like drops and spills)",
              "Screen repair or replacement",
              "Water damage repair",
              "Theft coverage",
              "Accessories replacement (like chargers and earphones)",
              "Coverage limit: Up to ₦150,000 per quarter",
            ]}
            onCtaClick={openModal} // Pass the openModal function
          />
        </div>
      </section>

      {/* Render the modal */}
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Pricing;
