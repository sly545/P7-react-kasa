import { useState } from 'react';
import PropTypes from 'prop-types';
import FleshBottom from '../../assets/fleshBottom.png';
import FleshTop from '../../assets/fleshTop.png';
import styles from '../Colapse/Colapse.module.css'


export function Colapse ({ title, content }) {

    //state etat ouver et feremer 
    const [isOpen, setIsopen] = useState(false);

    // le handeler 
    const handleCickColapse = () => {
        setIsopen(!isOpen);
    }

    //jsx qui change pas 
    return(
        <div className={styles.contener}>
            <div>
                <div className={styles.TitleContener}>
                <h2 className={styles.descriptTitle} onClick={handleCickColapse}>
                    { title }
                    <img className={styles.flesh} src={isOpen ? FleshTop : FleshBottom } alt="toggle colapse"/>
                </h2>

              </div>
              {isOpen && <h3 className={styles.descript}> {content}</h3>}
            </div>
        </div>

    );
}

Colapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
export default Colapse;