import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../Proprio/Proprio.module.css';

function Proprio(props) {
  // Utilisation de la fonction useState pour définir les variables name, picture et rating à partir des propriétés de l'objet accomodation passé en tant que prop
  const {rating} = props.accomodation;
  const {name,picture } = props.accomodation.host;

  // Création d'un tableau vide pour stocker les étoiles
  const stars = [];
  
  // Boucle for pour générer les étoiles pleines en fonction de la valeur de rating
  for (let i = 0; i < rating; i++) {
    // Ajout d'une étoile pleine au tableau stars j'ai ajouter une classe pour une media query pour les plus petit smartphones. 
    stars.push(<FontAwesomeIcon icon={fullStar} className={styles.etoilePlein} key={i} />);
  }
  
  // Boucle for pour générer les étoiles vides
  for (let i = rating; i < 5; i++) {
    // Ajout d'une étoile vide au tableau stars j'ai ajouter une classe pour une media query pour les plus petit smartphones. 
    stars.push(<FontAwesomeIcon icon={fullStar} className={styles.etoileVide} key={i} />);
  }

  return (
    <div className={styles.query}>
     <div className={styles.nom}> 
      <h3 className={styles.tiltelProprio}>{name}</h3>
     <p className={styles.contenentimg} ><img className={styles.picturesProprio} src={picture} alt={name} /></p>
     </div>
      <div className={styles.etoile}> 
      <p className={styles.starts} >{stars}</p> {/* Affichage des étoiles */}
      </div>
    </div>
  );
}

// Définition des propTypes pour le composant Proprio
Proprio.propTypes = {
  accomodation: PropTypes.object.isRequired,
};

export default Proprio;