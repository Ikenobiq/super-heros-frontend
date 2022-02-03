import styles from "./Footer.module.scss";
import svg from "../../shared/images/sprite.svg";

const Footer = () => {
  return (
    <footer className={"conrainer"}>
      <div className={styles.FooterSocialDiv}>
        <div className={styles.svgDiv}>
          <ul className={styles.svgList}>
            <li className={styles.svgItem}>
              <svg className={styles.svg}>
                <use href={`${svg}#twitter`}></use>
              </svg>
            </li>
            <li className={styles.svgItem}>
              <svg className={styles.svg}>
                <use href={`${svg}#facebook`}></use>
              </svg>
            </li>
            <li className={styles.svgItem}>
              <svg className={styles.svg}>
                <use href={`${svg}#instagram`}></use>
              </svg>
            </li>
            <li className={styles.svgItem}>
              <svg className={styles.svg}>
                <use className={styles.use} href={`${svg}#youtube`}></use>
              </svg>
            </li>
          </ul>
        </div>
        <p className={styles.footerBy}>
          &copy; 2022 | All Rights Reserved | Developed with{" "}
          <span>
            <svg className={styles.footerBysvg}>
              <use className={styles.use} href={`${svg}#heart`}></use>
            </svg>
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
