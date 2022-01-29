import styles from "./Header.module.scss";
import logo from "../../shared/images/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerWrap} ${"container"}`}>
        <div className={styles.headerDivLogo}>
          <img className={styles.headerDivLogoImg} src={logo} alt="logo" />
        </div>
        <a className={styles.headerHomeLink} href="/">
          Home
        </a>
        <a className={styles.headerAddHeroLink} href="/">
          Add Hero
        </a>
      </div>
    </header>
  );
};
export default Header;
