import TextField from "../../../shared/components/TextField";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSuperheroesById, updateSuperhero } from "../../../fetch/fetch";
import Button from "../../../shared/components/Button";

const EditeHero = () => {
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
  const { nickname, real_name, origin_description, superpowers, catch_phrase } =
    superHero.result;
  const hendleChange = (key, newValue) => {
    setSuperHero((prev) => {
      const newSuperhero = { ...prev };
      newSuperhero[key] = newValue;
      return newSuperhero;
    });
  };
  const handleSubmit = async () => {
    try {
      await updateSuperhero(superHero);
      alert("update");
    } catch {
      console.log("failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <TextField placeholder={nickname} onChang={hendleChange} />
        </li>
        <li>
          <TextField placeholder={real_name} onChang={hendleChange} />
        </li>
        <li>
          <TextField placeholder={origin_description} onChang={hendleChange} />
        </li>
        <li>
          <TextField placeholder={superpowers} onChang={hendleChange} />
        </li>
        <li>
          <TextField placeholder={catch_phrase} onChang={hendleChange} />
        </li>
      </ul>
      <Button type="submit" text="save" />
    </form>
  );
};
export default EditeHero;
