import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField";
import styles from "./SearchMainSection.module.scss";
import svg from "../../shared/images/sprite.svg";

const SearchMainSection = ({variant, onSuperheroNicknameChange}) =>
    (
        <div className={styles.mainDiv}>
            <div className={styles.searchDiv}>
                <TextField placeholder={"Enter character name"}
                           onChange={e => onSuperheroNicknameChange(e.currentTarget.value)}/>
                <svg className={styles.svgZoom}>
                    <use className={styles.zoom} href={`${svg}#zoom`}/>
                </svg>
            </div>
            <a href="./find">
                <Button className={styles.searchBtn} variant={variant} text="Search"/>
            </a>
        </div>
    );
export default SearchMainSection;
