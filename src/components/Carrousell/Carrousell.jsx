import { useState,} from "react";
import PropTypes from 'prop-types';
import styles from '../Carrousell/Carrousell.module.css'
import fleshLeft from '../../assets/felshLeft.png'
import fleshRight from '../../assets/flesheRight.png' 


function Carrousell(props) {
  const photos = props.accomodation.pictures;
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

 
  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className={styles.WrapManege}>
    <img className={styles.buttonLeft} src={fleshLeft} onClick={handlePrevPhoto} alt="Précédent" />
    <img className={styles.photoCarousel} src={photos[currentPhotoIndex]} alt="" />
    <img className={styles.buttonRight} src={fleshRight} onClick={handleNextPhoto} alt="Suivant" />
  </div>
  );
}

Carrousell.propTypes = {
  accomodation:PropTypes.object.isRequired,
};

export default Carrousell;