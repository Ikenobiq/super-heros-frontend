import SimpleSlider from "./Slider";
import styles from "./SelectedHero.module.scss";
import Button from "../../../shared/components/Button";
import { getSuperheroesById, removeSuperHero } from "../../../fetch/fetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SelectedHero = () => {
  const [superHero, setSuperHero] = useState(null);

  const params = useParams();

  useEffect(() => {
    const getHero = async () => {
      try {
        const { data } = await getSuperheroesById(params.id);
        setSuperHero(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getHero();
  }, [params]);
  if (superHero === null) return null;

  const deleteHero = async () => {
    try {
      await removeSuperHero(params.id);
      alert("SuperHero now not so Super =)");
    } catch {
      console.log("delete failed ");
    }
  };

  const {
    _id,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = superHero.result;

  return (
    <main className="container">
      <div className={styles.SelectedHero}>
        <div>
          <SimpleSlider images={images} />
        </div>
        <div className={styles.ListWrap}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <h3 className={styles.nickname}>{nickname}</h3>
            </li>
            <li className={styles.item}>
              <h3 className={styles.heading}>Real name:</h3>
              <p className={styles.paragraph}> {real_name}</p>
            </li>
            <li className={styles.item}>
              <h3 className={styles.heading}>Origin:</h3>
              <p className={styles.paragraph}> {origin_description}</p>
            </li>
            <li className={styles.item}>
              <h3 className={styles.heading}>Superpowers: </h3>
              <p className={styles.paragraph}>{superpowers}</p>
            </li>
            <li className={styles.item}>
              <h3 className={styles.heading}>Catch phrase:</h3>
              <p className={styles.paragraph}>{catch_phrase}</p>
            </li>
          </ul>
          <div className={styles.buttonWrap}>
            <Link to={`/super-heros/${_id}/edite`}>
              <Button className={styles.button} text={"Edite"} />
            </Link>
            <Link to={`/`}>
              <Button
                className={styles.button}
                text={"Delete"}
                onClick={deleteHero}
                type="button"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SelectedHero;
