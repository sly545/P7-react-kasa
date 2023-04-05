
import { useState } from 'react';
import PropTypes from 'prop-types';
import EtoileFull from '../../assets/Etoileplein.svg'
import EtoileEmpty from '../../assets/Etoilevide.svg'
import styles from '../Proprio/Proprio.module.css'

function Proprio(props) {
  // Utilisation de la fonction useState pour définir les variables name, picture et rating à partir des propriétés de l'objet accomodation passé en tant que prop
  const [name] = useState(props.accomodation.host.name);
  const [picture] = useState(props.accomodation.host.picture);
  const [rating] = useState(props.accomodation.rating);

  // Création d'un tableau vide pour stocker les étoiles
  const stars = [];
  
  // Boucle for pour générer les étoiles pleines en fonction de la valeur de rating
  for (let i = 0; i < rating; i++) {
    // Ajout d'une étoile pleine au tableau stars
    stars.push(<img src={EtoileFull} alt="étoile pleine" key={i} />);
  }
  
  // Boucle for pour générer les étoiles vides
  for (let i = rating; i < 5; i++) {
    // Ajout d'une étoile vide au tableau stars
    stars.push(<img src={EtoileEmpty} alt="étoile vide" key={i} />);
  }

  return (
    <div>
     
      <h3 className={styles.tiltelProprio}>{name}</h3>
     <p><img className={styles.picturesProprio} src={picture} alt={name} /></p>
     
      <p>{stars}</p> {/* Affichage des étoiles */}
    </div>
  );
}

// Définition des propTypes pour le composant Proprio
Proprio.propTypes = {
  accomodation: PropTypes.object.isRequired,
};

export default Proprio;