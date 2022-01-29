import SearchMainSection from "../../../client/SearchMainSection/SearchMainSection";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.heroBack}>
      <div className={`${styles.hero} ${"container"}`}>
        <h1 className={styles.title}>Choose your favorite Super Hero </h1>
        <p className={styles.paragraph}>or create something new</p>
        <SearchMainSection variant={"primary"} />
      </div>
    </div>
  );
};
export default Hero;
