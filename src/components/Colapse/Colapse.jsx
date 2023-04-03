import { useState } from 'react';
import PropTypes from 'prop-types';
import FleshBottom from '../../assets/fleshBottom.png';
import FleshTop from '../../assets/fleshTop.png';
import styles from '../Colapse/Colapse.module.css'


export function Colapse(props) {
 
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isEquipmentsVisible, setIsEquipmentsVisible] = useState(false);
  const description = props.accomodation.description;
  const equipments = props.accomodation.equipments;


  const handleToggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const handleToggleEquipments = () => {
    setIsEquipmentsVisible(!isEquipmentsVisible);
  };

  return (
    <div className={styles.contener}>
      {props.showDescription && (
        <div>
          <div className={styles.TitleContener}>
            <h2 className={styles.descriptTitle} onClick={handleToggleDescription}>
              Description
              <img className={styles.flesh} src={isDescriptionVisible ? FleshTop : FleshBottom} alt="toggle description" />
            </h2>
          </div>
          {isDescriptionVisible && <h3 className={styles.descript} >{description}</h3>}
        </div>
      )}
 
      {props.showEquipments && (
        <div>
          <div className={styles.TitleContener}>
            <h2 className={styles.descriptTitle} onClick={handleToggleEquipments}>
              Equipements
              <img className={styles.flesh} src={isEquipmentsVisible ? FleshTop : FleshBottom} alt="toggle equipments" />
            </h2>
          </div>
          {isEquipmentsVisible && (
            <ul className={styles.descript} >
              {equipments.map((equipment, index) => (
                <li  key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      )}
     
    
    
</div>
);
}

Colapse.propTypes = {
  accomodation: PropTypes.object.isRequired,
  showDescription: PropTypes.bool,
  showEquipments: PropTypes.bool,
};

export default Colapse;