import TextField from "../../../shared/components/TextField";
import { useState } from "react";
import { createSuperhero } from "../../../fetch/fetch";
import Button from "../../../shared/components/Button";
import styles from "./AddHero.module.scss";
import logo from "../../../shared/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const AddHero = () => {
  const [superhero, setSuperhero] = useState({
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
  });

  const navigate = useNavigate();

  const hendleChange = (event, key) => {
    const newHero = { ...superhero };
    newHero[key] = event.target.value;
    setSuperhero(newHero);
  };

  return (
    <div className={styles.addMain}>
      <div className="container">
        <div className={styles.DivLogo}>
          <a className={styles.HomeLink} href="/">
            <img className={styles.DivLogoImg} src={logo} alt="logo" />
          </a>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <TextField
              placeholder="Enter nickname"
              value={superhero.nickname}
              onChange={(event) => hendleChange(event, "nickname")}
            />
          </li>
          <li className={styles.item}>
            <TextField
              placeholder="Enter real name"
              value={superhero.real_name}
              onChange={(event) => hendleChange(event, "real_name")}
            />
          </li>
          <li className={styles.item}>
            <TextField
              placeholder="Enter origin description"
              value={superhero.origin_description}
              onChange={(event) => hendleChange(event, "origin_description")}
            />
          </li>
          <li className={styles.item}>
            <TextField
              placeholder="Enter superpowers"
              value={superhero.superpowers}
              onChange={(event) => hendleChange(event, "superpowers")}
            />
          </li>
          <li className={styles.item}>
            <TextField
              placeholder="Enter catch phrase"
              value={superhero.catch_phrase}
              onChange={(event) => hendleChange(event, "catch_phrase")}
            />
          </li>
          <li>
            <form action="">
              <input type="file" />
            </form>
          </li>
        </ul>
        <Link to={`/`}>
          <Button
            type="submit"
            text="Save"
            onClick={() => {
              createSuperhero(superhero);
            }}
          />
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
export default AddHero;
