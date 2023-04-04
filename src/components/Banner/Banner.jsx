import PropTypes from 'prop-types';
import ImgBanner from '../../images/Chez-vous-partout.png';
import styles from '../Banner/Banner.module.css';


export default function Banner({ imgSrc, showTitle = true }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.contenerText}>
        <img
          className={styles.ImgBanner}
          src={imgSrc || ImgBanner}
          alt="Vue d'une crique bordée de sapins et d'une falaise escarpée en arrière-plan"
        />
        {showTitle && <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>}
      </div>
    </div>
  );
}

Banner.propTypes = {
  imgSrc: PropTypes.string,
  showTitle: PropTypes.bool,
};