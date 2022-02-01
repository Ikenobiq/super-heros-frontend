import SimpleSlider from "./Slider";
import styles from "./SelectedHero.module.scss";
const SelectedHero = ({ superHeros }) => {
  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = superHeros;
  return (
    <main>
      <div>
        <SimpleSlider images={images} />
      </div>
      <ul>
        <li>
          <p className={styles.paragraph}>{nickname}</p>
        </li>
        <li>
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
          <p className={styles.paragraph}>{catch_phrase}</p>;
        </li>
      </ul>
    </main>
  );
};
export default SelectedHero;
