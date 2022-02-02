import CardItem from "./CardItem";
import styles from "./Cards.module.scss";
import {
  createSuperhero,
  getSuperheroes,
  updateSuperhero,
} from "../../../fetch/fetch";
import { useEffect, useState } from "react";
import Pagination from "../../../client/Paginator/Pagination";
import SelectedHero from "../../superHerosPage/SelectedHero/SelectedHero";

const PAGE_SIZE = 5;

const Card = ({ superheroNickname }) => {
  const [allSuperheroes, setAllSuperheroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(PAGE_SIZE);

  // Trash start

  const [superhero, setSuperhero] = useState();
  const handleSuperheroChange = (key, newValue) => {
    setSuperhero((prev) => {
      const newSuperhero = { ...prev };
      newSuperhero[key] = newValue;
      return newSuperhero;
    });
  };
  // Trash end

  const fetchSuperheroes = async () => {
    const fetchedSuperheroes = await getSuperheroes(currentPage, PAGE_SIZE);
    const { data } = fetchedSuperheroes;
    setAllSuperheroes(data.result);
    setTotalCount(data.totalCount);
  };

  useEffect(() => {
    fetchSuperheroes();
    // Remove start
    getSuperheroes(currentPage, PAGE_SIZE).then((resp) => {
      setAllSuperheroes(resp.data.result);
      setTotalCount(resp.data.totalCount);
      setSuperhero(resp.data.result[0]); // Important: remove
    }); // Remove end
  }, [currentPage]);

  const onPageChanged = (newPage) => setCurrentPage(newPage);

  const byNickname = (superhero) =>
    superhero.nickname.toLowerCase().includes(superheroNickname);

  const handleSuperheroCreated = () => {
    // перенести
    const superheroToCreate = { ...superhero };
    delete superheroToCreate._id;
    createSuperhero(superheroToCreate).then(fetchSuperheroes);
  };

  const handleSuperheroUpdated = () => {
    // перенести
    updateSuperhero(superhero).then(fetchSuperheroes);
  };

  return (
    <div className="container">
      <ul className={styles.list}>
        {allSuperheroes.filter(byNickname).map((superHero) => (
          <CardItem key={superHero._id} superHero={superHero} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChanged}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
      />
      {/* {superhero && (
        <SelectedHero
          superhero={superhero}
          onSuperheroChange={handleSuperheroChange}
          onSubmitButtonClick={handleSuperheroCreated}
        />
      )} */}
    </div>
  );
};
export default Card;
