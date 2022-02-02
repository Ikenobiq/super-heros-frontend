import CardItem from "./CardItem";
import styles from "./Cards.module.scss";

import { useEffect, useState } from "react";
import Pagination from "../../../client/Paginator/Pagination";
import { getSuperheroes } from "../../../fetch/fetch";

const PAGE_SIZE = 5;

const Card = () => {
  const [allSuperheroes, setAllSuperheroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(PAGE_SIZE);

  useEffect(() => {
    getSuperheroes(currentPage, PAGE_SIZE).then((resp) => {
      setAllSuperheroes(resp.data.result);
      setTotalCount(resp.data.totalCount);
    });
  }, [currentPage]);

  const onPageChanged = (newPage) => setCurrentPage(newPage);

  return (
    <div className="container">
      <ul className={styles.list}>
        {allSuperheroes.map((superHero) => (
          <CardItem key={superHero._id} superHero={superHero} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChanged}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
      />
    </div>
  );
};
export default Card;
