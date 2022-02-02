import styles from "./Hero.module.scss";
const Hero = () => (
  <div className={styles.heroBack}>
    <div className="container">
      <h1 className={styles.title}>Choose your favorite Super Hero </h1>
      <p className={styles.paragraph}>or create something new</p>
    </div>
  </div>
);
export default Hero;
