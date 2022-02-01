import styles from "./Cards.module.scss";
const CardItem = ({ superHero }) => {
  const { nickname, images } = superHero;
  return (
    <li className={styles.item}>
      <img className={styles.headingImg} src={images[0]} alt="hero img" />
      <h3 className={styles.nickname}>{nickname}</h3>
    </li>
  );
};
export default CardItem;
