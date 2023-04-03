import { useState } from 'react';
import styles from '../Colapse/Colapse.module.css';
import PropTypes from 'prop-types';

function CollapseSection({ title, description, fleshTop, fleshBottom }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleFleshClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={styles.WrapAbout}>
      <div className={styles.ContenerAbout} style={{backgroundColor: showDescription ? '#f1f1f1' : 'initial'}}> 
        <div className={styles.TitleContener}>
          <h2 className={styles.descriptTitle}>
            {title}
            <img
              src={showDescription ? fleshTop : fleshBottom}
              onClick={handleFleshClick}
            />
          </h2>
        </div>
      </div>

      {showDescription && <h3 className={styles.descript}>{description}</h3>}
    </div>
  );
}

CollapseSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fleshTop: PropTypes.string.isRequired,
    fleshBottom: PropTypes.string.isRequired,
};

export default CollapseSection;