import TextField from "../../../shared/components/TextField";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSuperheroesById, updateSuperhero } from "../../../fetch/fetch";
import Button from "../../../shared/components/Button";
import styles from "./EditeHero.module.scss";
import logo from "../../../shared/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
const EditeHero = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [superhero, setSuperhero] = useState(null);

  useEffect(() => {
    const getHero = async () => {
      try {
        const { data } = await getSuperheroesById(params.id);
        console.log(data);
        setSuperhero(data.result);
      } catch (error) {
        console.log(error.message);
      }
    };
    getHero();
  }, [params]);
  if (superhero === null) return null;
  console.log(superhero);

  const { nickname, real_name, origin_description, superpowers, catch_phrase } =
    superhero;

  const hendleChange = (event, key) => {
    const newHero = { ...superhero };
    newHero[key] = event.target.value;
    setSuperhero(newHero);
  };

  return (
    <div className={styles.editeMain}>
      <div className="container">
        <div className={styles.DivLogo}>
          <a className={styles.HomeLink} href="/">
            <img className={styles.DivLogoImg} src={logo} alt="logo" />
          </a>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <TextField
              value={nickname}
              onChange={(event) => hendleChange(event, "nickname")}
            />
          </li>
          <li className={styles.item}>
            <TextField
              value={real_name}
              onChange={(event) => hendleChange(event, "real_name")}
            />
          </li>
          <li className={styles.item}>
            <TextField
              value={origin_description}
              onChange={(event) => hendleChange(event, "origin_description")}
            />
          </li>
          <li className={styles.item}>
            <TextField
              value={superpowers}
              onChange={(event) => hendleChange(event, "superpowers")}
            />
          </li>
          <li className={styles.item}>
            <TextField
              value={catch_phrase}
              onChange={(event) => hendleChange(event, "catch_phrase")}
            />
          </li>
        </ul>
        <Link to={`/`}>
          <Button
            type="submit"
            text="Save"
            onClick={() => {
              updateSuperhero(superhero);
            }}></Button>
        </Link>

        <Button
          className={styles.cancelBtn}
          type="submit"
          text="Cancel"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};
export default EditeHero;
