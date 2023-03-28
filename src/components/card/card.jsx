import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'; 

import styles from "./card.module.css";

function Card() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        "/data.json"
      );
      setApartments(result.data);
    }

    fetchData();
  }, []);

  return (
    <div className={styles.wrap}>
      {apartments.map(
        (apartment) => (
          <Link to={`/Accomodation/${apartment.id}`} key={apartment.id}>
            <div className={`${styles.contenerCard} ${styles.imgContainer}`}>
              <img
                className={styles.imgCover}
                src={apartment.cover}
                alt={apartment.title}
              />
              <h2 className={styles.titleCover}>{apartment.title}</h2>
            </div>
          </Link>
        )
      )}
    </div>
  );
}

export default Card;
