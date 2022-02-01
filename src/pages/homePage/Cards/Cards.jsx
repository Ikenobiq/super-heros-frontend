import CardItem from "./CardItem";
import styles from "./Cards.module.scss";
import { fetchAllSuperheroes } from "../../../fetch/fetch";
import { useEffect, useState } from "react";

const Card = () => {
  const [allSuperheroes, setAllSuperheroes] = useState([]);
  useEffect(() => {
    fetchAllSuperheroes().then((resp) => {
      setAllSuperheroes(resp.data.result);
    });
  }, []);
  return (
    <div className="container">
      <ul className={styles.list}>
        {allSuperheroes.map((superHero) => (
          <CardItem key={superHero._id} superHero={superHero} />
        ))}
      </ul>
    </div>
  );
};
export default Card;
