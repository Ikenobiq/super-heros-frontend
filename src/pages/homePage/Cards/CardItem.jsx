import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";
const CardItem = ({ superHero }) => {
  const { nickname, images, _id } = superHero;
  return (
    <li className={styles.item}>
      <Link className={styles.itemLink} to={`/super-heros/${_id}`}>
        <img className={styles.headingImg} src={images[0]} alt="hero img" />
        <h3 className={styles.nickname}>{nickname}</h3>
      </Link>
    </li>
  );
};
export default CardItem;
