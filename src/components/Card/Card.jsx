import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import styles from "./Card.module.css";

// Déclaration du composant Card
function Card() {
  // État pour stocker les appartements récupérés
  const [apartments, setApartments] = useState([]);

  // Hook d'effet pour récupérer les données d'appartements à partir d'un fichier JSON local
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        "/data.json"
      );
      setApartments(result.data);
    }

    fetchData();
  }, []);
// Renvoie un élément `div` contenant une liste de liens vers les pages d'appartements
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
