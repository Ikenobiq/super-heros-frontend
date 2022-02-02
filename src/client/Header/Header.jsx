import styles from "./Header.module.scss";
import logo from "../../shared/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerWrap} ${"container"}`}>
        <div className={styles.headerDivLogo}>
          <a className={styles.headerHomeLink} href="/">
            <img className={styles.headerDivLogoImg} src={logo} alt="logo" />
          </a>
        </div>
        <div className={styles.navDiv}>
          <a className={styles.headerHomeLink} href="/">
            Home
          </a>
          <Link
            className={styles.headerAddHeroLink}
            to={`/super-heros/addHero`}>
            Add Hero
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
