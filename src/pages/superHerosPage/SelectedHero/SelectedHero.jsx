import SimpleSlider from "./Slider";
import styles from "./SelectedHero.module.scss";
import TextField from "../../../shared/components/TextField";
import Button from "../../../shared/components/Button";
import { getSuperheroesById, removeSuperHero } from "../../../fetch/fetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SelectedHero = () => {
  const params = useParams();

  const [superHero, setSuperHero] = useState(null);
  useEffect(() => {
    const getHero = async () => {
      try {
        const { data } = await getSuperheroesById(params.id);
        console.log(data);
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

  console.log(superHero);
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
          <p className={styles.paragraph}>{catch_phrase}</p>
        </li>
      </ul>
      <Link to={`/super-heros/${_id}/edite`}>
        <Button text={"Edite"} superHero={superHero.result} />
      </Link>
      <Link to={`/`}>
        <Button text={"Delete"} onClick={deleteHero} type="button" />
      </Link>
    </main>
  );
};
export default SelectedHero;

// <TextField
//             value={nickname}
// onChange={(e) =>
//   onSuperheroChange("nickname", e.currentTarget.value)
// }
// />

//     <TextField
//     value={real_name}
//     onChange={(e) =>
//       onSuperheroChange("real_name", e.currentTarget.value)
//     }
//   />
