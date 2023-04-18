import PropTypes from 'prop-types'; // Import de PropTypes pour définir les types attendus des props
import ImgBanner from '../../images/Chez-vous-partout.png';
import styles from '../Banner/Banner.module.css';

// Définition du composant fonctionnel React "Banner" 
export default function Banner({ imgSrc, showTitle = true, imgHeight }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.contenerText}>
        <img
          className={styles.ImgBanner}
          src={imgSrc || ImgBanner}
          alt="Vue d'une crique bordée de sapins et d'une falaise escarpée en arrière-plan"
          style={{ height: imgHeight }}
        />
        {showTitle && <h1 className={styles.title}>
    Chez vous,
    <br className={styles.break} />
    partout et ailleurs
  </h1>}
      </div>
    </div>
  );
}

// Définition des types attendus pour chaque prop
Banner.propTypes = {
  imgSrc: PropTypes.string,
  showTitle: PropTypes.bool,
  imgHeight: PropTypes.string,
};
