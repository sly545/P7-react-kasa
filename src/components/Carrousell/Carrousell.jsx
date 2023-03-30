import  { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styles from '../Carrousell/Carrousell.module.css'

function Manege(props) {
  const [photos, setPhotos] = useState([]);
  

  useEffect(() => {
    // appeler l'API avec fetch
    fetch("http://localhost:3000/data.json")
      .then((response) => response.json())
      .then((data) => {
        const apartment = data.find((a) => a.id === props.id);
        setPhotos(apartment.pictures);
      })
      .catch((error) => console.error(error));
  }, [props.id]);
  
  return (
    <div>
      <h1>Carrousel de photos</h1>
      {photos.map((pictureUrl) => (
        <img className={styles.test} key={pictureUrl} src={pictureUrl} alt="" />
      ))}
    </div>
  );
 
}

export default Manege;      

Manege.propTypes = {
  id: PropTypes.string.isRequired,
};
