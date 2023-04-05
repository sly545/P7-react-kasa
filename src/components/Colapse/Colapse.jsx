import { useState } from 'react';
import PropTypes from 'prop-types';
import FleshBottom from '../../assets/fleshBottom.png';
import FleshTop from '../../assets/fleshTop.png';
import styles from '../Colapse/Colapse.module.css'




export function Dropdown ({ title, content }) {

    //state etat ouver et feremer 
    const [isOpen, setIsopen] = useState(false);

    // le handeler 
    const handleCickDropdown = () => {
        setIsopen(!isOpen);
    }

    //jsx qui change pas 
    return(
        <div className={styles.contener}>
            <div>
                <div className={styles.TitleContener}>
                <h2 className={styles.descriptTitle} onClick={handleCickDropdown}>
                    { title }
                    <img className={styles.flesh} src={isOpen ? FleshTop : FleshBottom } alt="toggle dropdown"/>
                </h2>

              </div>
              {isOpen && <h3 className={styles.descript}> {content}</h3>}
            </div>
        </div>

    );
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
export default Dropdown;