import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import styles from '../Carrousell/Carrousell.module.css'
import fleshLeft from '../../assets/felshLeft.png'
import fleshRight from '../../assets/flesheRight.png'

function Carrousell(props) {
  const photos = props.accomodation.pictures;
  // État pour suivre l'index de la photo actuellement affichée
  const [currentSlide, setCurrentSlide] = useState(0);
  // Référence pour accéder au composant Slider
  const sliderRef = useRef(null);


  // Options de configuration pour le composant Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
     beforeChange: (_, next) => setCurrentSlide(next)
    
  };

  // Fonction pour passer à la photo suivante en utilisant la méthode slickNext du composant Slider
  const handleNextPhoto = () => {
    sliderRef.current.slickNext();
  };
  //pour faire l'inversse
  const handlePrevPhoto = () => {
    sliderRef.current.slickPrev();
  };

  // Renvoie un élément `div` contenant les boutons de navigation personnalisés, le compteur et le composant Slider pour afficher les photos

  return (
    <div className={styles.WrapManege}>
      <img className={styles.buttonLeft} src={fleshLeft} onClick={handlePrevPhoto} alt="Précédent" />
      <Slider ref={sliderRef} {...settings}>
        {photos.map((photo) => (
          <div key={photo}>
            <img className={styles.photoCarousel} src={photo} alt="" />
          </div>
        ))}
      </Slider>
      <div className={styles.counter}>
        {currentSlide + 1} / {photos.length}
      </div>
      <img className={styles.buttonRight} src={fleshRight} onClick={handleNextPhoto} alt="Suivant" />
    </div>
  );
}

Carrousell.propTypes = {
  accomodation:PropTypes.object.isRequired,
};

export default Carrousell;