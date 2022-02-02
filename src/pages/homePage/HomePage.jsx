import Header from "../../client/Header";
import Footer from "../../client/Footer/Footer";
import Hero from "./Hero/Hero";
import Card from "./Cards/Cards";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <Hero />
      <Card />
      <Footer />
    </div>
  );
};
export default HomePage;
