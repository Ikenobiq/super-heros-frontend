import Footer from "../../client/Footer/Footer";
import Header from "../../client/Header";
import SelectedHero from "../superHerosPage/SelectedHero/SelectedHero";
import SuperHeros from "../../SuperHeros.json";

const SuperHerosPage = () => {
  return (
    <>
      <Header />
      <SelectedHero SuperHeros={SuperHeros} />
      <Footer />
    </>
  );
};

export default SuperHerosPage;
