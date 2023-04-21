import { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../Colapse/Colapse.module.css';

export function Colapse({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  let paddingBottom = '';

  //condition  pour gérer les diferrents padding du selon la page ou ils s'affiche.
  if (window.matchMedia) {
    paddingBottom = location.pathname === '/APropos' ? '5px' : '20px';
  }

  if (window.matchMedia('(max-width: 768px)').matches) {
    // Appliquez la valeur de padding différente pour les écrans avec une largeur maximale de 768 pixels
    paddingBottom = location.pathname === '/APropos' ? '50px' : '3px';
  }
  

  const handleCickColapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.contener}>
      <div>
        <div className={styles.TitleContener}>
          <h2 className={styles.descriptTitle} onClick={handleCickColapse}>
            {title}
            <FontAwesomeIcon className={styles.flesh} icon={isOpen ? faChevronUp : faChevronDown} />
          </h2>
        </div>
        {isOpen && (
          <h3 style={{ paddingBottom }} className={`${styles.descript} ${className}`}>
            {content}
          </h3>
        )}
      </div>
    </div>
  );
}

Colapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
};

export default Colapse;
