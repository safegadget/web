import Pricing from "./Pricing";

const PricingPlanExport = () => {
  return (
    <section style={{ backgroundColor: "#fff", padding: 0 }}>
      <div className="offer-section">
        <h2 className="offer-title">PROTECTION PLANS</h2>
        <h1 className="offer-heading" style={{ margin: 0 }}>
          Get Flexible plans
        </h1>
      </div>
      <Pricing />
    </section>
  );
};

export default PricingPlanExport;
