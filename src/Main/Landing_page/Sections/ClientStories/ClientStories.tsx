import Testimonials from "./Testimonial/Testimonials";

const ClientStories = () => {
  return (
    <section style={{ backgroundColor: "#fff", padding: 0 }}>
      <div className="offer-section">
        <h2 className="offer-title">TESTIMONIALS</h2>
        <h1 className="offer-heading" style={{ margin: 0 }}>
          Client Success Stories
        </h1>
      </div>
      <Testimonials />
    </section>
  );
};

export default ClientStories;
