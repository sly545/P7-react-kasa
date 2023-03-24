import styles from "../card/card.module.css"
import React, { useState, useEffect } from 'react'; // Import des hooks useState et useEffect de React
import axios from 'axios'; // Import de la bibliothèque axios pour effectuer des appels HTTP

function Card() {
  const [apartments, setApartments] = useState([]); // Déclaration de la variable d'état 'apartments' et de la fonction pour la mettre à jour 'setApartments', initialisées à un tableau vide

  useEffect(() => { // Hook useEffect qui permet d'exécuter du code lors du montage du composant
    async function fetchData() { // Fonction asynchrone pour effectuer l'appel HTTP
      const result = await axios(
        '/data.json', // L'appel HTTP pour récupérer les données du fichier JSON
      );
      setApartments(result.data); // Mise à jour de la variable d'état 'apartments' avec les données récupérées
    }

    fetchData(); // Exécution de la fonction 'fetchData' pour effectuer l'appel HTTP
  }, []); // Le tableau vide en deuxième argument indique que ce hook doit être exécuté une seule fois lors du montage du composant

  return (
    <div className={styles.wrap}>
      {apartments.map(apartment => ( // Utilisation de la méthode 'map' pour itérer sur le tableau 'apartments' et générer un élément du DOM pour chaque appartement
        <div className={`${styles.contenerCard} ${styles.imgContainer}`} key={apartment.id}>
          <img className={styles.imgCover} src={apartment.cover} alt={apartment.title} /> {/* Utilisation de la balise 'img' pour afficher l'image de couverture de l'appartement */}
          <h2 className={styles.titleCover} >{apartment.title}</h2> {/* Utilisation de la balise 'h2' pour afficher le titre de l'appartement */}
        </div>
      ))}
    </div>
  );
}

export default Card; // Export du composant 'Card' pour pouvoir l'utiliser dans d'autres fichiers
