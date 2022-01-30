import CardItem from "./CardItem";
import styles from "./Cards.module.scss";
const Card = ({ SuperHeros }) => {
  console.log(SuperHeros);
  return (
    <div className="container">
      <ul className={styles.list}>
        {SuperHeros.map((SuperHero) => (
          <CardItem SuperHero={SuperHero} />
        ))}
      </ul>
    </div>
  );
};
export default Card;
