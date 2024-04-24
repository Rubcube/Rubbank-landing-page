import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import ServicesSection from "../../components/ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <Hero>
        <Navbar />
      </Hero>
      <ServicesSection />
    </div>
  );
}

export default Home;
