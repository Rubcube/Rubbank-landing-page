import CreateAccountSection from "../../sectionCreateAccount/components/CreateAccountSection/CreateAccountSection";
import FaqSection from "../../sectionFaq/components/FaqSection/FaqSection";
import FooterSection from "../../sectionFooter/components/FooterSection/FooterSection";
import Hero from "../../sectionHero/components/Hero/Hero";
import Navbar from "../../sectionHero/components/Navbar/Navbar";
import NewsSection from "../../sectionNews/components/NewsSection/NewsSection";
import PartnersSection from "../../sectionPartners/components/PartnersSection/PartnersSection";
import ServicesSection from "../../sectionService/components/ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <Hero>
        <Navbar />
      </Hero>
      <ServicesSection />
      <PartnersSection />
      <NewsSection />
      <FaqSection />
      <CreateAccountSection />
      <FooterSection />
    </div>
  );
}

export default Home;
