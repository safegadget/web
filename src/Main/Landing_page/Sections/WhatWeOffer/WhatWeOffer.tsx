import GadgetRecommendation from "./GadgetRecommendation/GadgetRecommendation";
import ServiceOptions from "./ServiceOptions/ServiceOptions";
import "./WhatWeOffer.css";

const WhatWeOffer = () => {
  return (
    <section style={{ backgroundColor: "#fff", padding: 0 }}>
      <div className="offer-section">
        <h2 className="offer-title">WHAT WE OFFER</h2>
        <h1 className="offer-heading">
          Protect, repair, and <br />
          Buy gadgets all in one place.
        </h1>
        <p className="offer-description">
          We offer flexible protection plans, repair services, and a curated
          selection of the latest gadgets from top brands and trusted vendors,
          all centralized in one place.
        </p>
      </div>
      <ServiceOptions />
      <GadgetRecommendation />
    </section>
  );
};

export default WhatWeOffer;
