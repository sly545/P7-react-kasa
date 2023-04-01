import { useState } from 'react';
import PropTypes from 'prop-types';
import FleshBottom from '../../assets/fleshBottom.png';
import FleshTop from '../../assets/fleshTop.png';
import styles from '../Colapse/Colapse.module.css'

export function Colapse(props) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const description = props.accomodation.description;

  const handleToggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
  <div className={styles.wrap} > 
    <div className={styles.contener}>
      <div className={styles.TitleContener}>
      <h2 className={styles.descriptTitle} onClick={handleToggleDescription}>
        Description
        <img className={styles.flesh} src={isDescriptionVisible ? FleshTop : FleshBottom} alt="toggle description" />
      </h2>
      </div>
      {isDescriptionVisible && <h3 className={styles.descript} >{description}</h3>}
    </div>
  </div>
  );
}

Colapse.propTypes = {
  accomodation: PropTypes.object.isRequired,
};

export default Colapse;
