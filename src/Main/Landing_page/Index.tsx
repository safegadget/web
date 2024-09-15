import Hero from "./Hero/Hero";
import imageUrlTop from "../../assets/HeroPage/HeroImg.png";
import Navbar from "./Navbar/Navbar";
import WhatWeOffer from "./Sections/WhatWeOffer/WhatWeOffer";
import ClientStories from "./Sections/ClientStories/ClientStories";
import WhyChooseUs from "./Sections/WhyChooseUs/WhyChooseUs";
import PricingPlanExport from "./Sections/PricingPlan/PricingPlan";
import MakeMoreMoney from "./Sections/MakeMoreMoney/MakeMoreMoney";
import FAQs from "./Sections/FAQs/FAQs";
import GetStarted from "./Sections/GetStarted/GetStarted";
import Footer from "./Footer/Footer";

type Props = {};

function Index({}: Props) {
  return (
    <div>
      <Navbar />
      <Hero
        header="Protect. "
        headerOne="Repair. "
        headerTwo="Update."
        description="At SafeGad, we offer comprehensive solutions to ensure your gadgets are protected, repaired, and upgraded with ease. From tailored protection plans to expert repair services and access to the latest devices, we've got you covered."
        ctaText="Protect your Gadget"
        imageUrlTop={imageUrlTop}
      />
      <WhatWeOffer />
      <ClientStories />
      <WhyChooseUs />
      <PricingPlanExport />
      <MakeMoreMoney />
      <FAQs />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Index;
