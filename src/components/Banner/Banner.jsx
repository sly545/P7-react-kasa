import PropTypes from 'prop-types';
import ImgBanner from '../../images/Chez-vous-partout.png';
import styles from '../Banner/Banner.module.css';

// Les prop `showTitle,et imgSrc` permet de contrôler l'affichage du titre et l'afichage de la photo, ce qui  va me servir pour utiliser le composant `Banner` sur différentes pages avec ou sans titre
export default function Banner({ imgSrc, showTitle = true }) {
  return (
    // Renvoie un élément `div` contenant une image et un titre (si `showTitle` est `true`)
    <div className={styles.wrap}>
      <div className={styles.contenerText}>
        <img
          className={styles.ImgBanner}
          src={imgSrc || ImgBanner}
          alt="Vue d'une crique bordée de sapins et d'une falaise escarpée en arrière-plan"
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

Banner.propTypes = {
  imgSrc: PropTypes.string,
  showTitle: PropTypes.bool,
};