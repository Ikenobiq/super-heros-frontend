import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField";
import styles from "./SearchMainSection.module.scss";
import svg from "../../shared/images/sprite.svg";
const SearchMainSection = ({ variant }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.searchDiv}>
        <TextField placeholder={"Enter character name"} />
        <svg className={styles.svgZoom}>
          <use className={styles.zoom} href={`${svg}#zoom`}></use>
        </svg>
      </div>
      <a href="./find">
        <Button className={styles.searchBtn} variant={variant} text="Search" />
      </a>
    </div>
  );
};
export default SearchMainSection;
