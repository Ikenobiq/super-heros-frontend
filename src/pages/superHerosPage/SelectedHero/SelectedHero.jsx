import SimpleSlider from "./Slider";
import styles from "./SelectedHero.module.scss";
import TextField from "../../../shared/components/TextField";
import Button from "../../../shared/components/Button";
import {createSuperhero} from "../../../fetch/fetch";

const SelectedHero = ({superhero, onSuperheroChange, onSubmitButtonClick}) => {
    const {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
    } = superhero;

    return (
        <main>
            <div>
                <SimpleSlider images={images}/>
            </div>
            <ul>
                <li>
                    <TextField value={nickname}
                               onChange={e => onSuperheroChange("nickname", e.currentTarget.value)}/>
                    <p className={styles.paragraph}>{nickname}</p>
                </li>
                <li>
                    <TextField value={real_name}
                               onChange={e => onSuperheroChange("real_name", e.currentTarget.value)}/>
                    <p className={styles.paragraph}>{real_name}</p>
                </li>
                <li>
                    <p>
                        <p className={styles.paragraph}>{origin_description}</p>
                    </p>
                </li>
                <li>
                    <p className={styles.paragraph}>{superpowers}</p>
                </li>
                <li>
                    <p className={styles.paragraph}>{catch_phrase}</p>
                </li>
            </ul>
            <Button text={"Create"} onClick={onSubmitButtonClick}/>
        </main>
    );
};
export default SelectedHero;
