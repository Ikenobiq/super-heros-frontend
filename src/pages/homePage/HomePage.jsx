import Header from "../../client/Header";
import Footer from "../../client/Footer/Footer";
import Hero from "./Hero/Hero";
import Card from "./Cards/Cards";
import SuperHeros from "../../SuperHeros.json";
console.log(SuperHeros);

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <Hero />
      <Card SuperHeros={SuperHeros} />
      <Footer />
    </div>
  );
};
export default HomePage;
