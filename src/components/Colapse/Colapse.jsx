// Importation des hooks et des modules nécessaires
import { useState } from 'react';
import PropTypes from 'prop-types';
import FleshBottom from '../../assets/fleshBottom.png';
import FleshTop from '../../assets/fleshTop.png';
import styles from '../Colapse/Colapse.module.css';

// Déclaration du composant Colapse
export function Colapse ({ title, content, className }) {
    // État pour suivre si le contenu est affiché ou non
    const [isOpen, setIsopen] = useState(false);
    // Fonction pour basculer l'affichage du contenu
    const handleCickColapse = () => {
        setIsopen(!isOpen);
    }
    // Renvoie un élément `div` contenant un titre et du contenu (si `isOpen` est `true`)
    return(
        <div className={styles.contener}>
            <div> 
                <div className={styles.TitleContener}>
                    <h2 className={styles.descriptTitle} onClick={handleCickColapse}>
                        { title }
                        <img className={styles.flesh} src={isOpen ? FleshTop : FleshBottom } alt="toggle colapse"/>
                    </h2>
                </div>
                {isOpen && <h3 className={`${styles.descript} ${className}`}> {content}</h3>}
                
            </div>
        </div>
    );
}

// Validation des props du composant
Colapse.propTypes = {
    title: PropTypes.string.isRequired,
    // La prop `content` peut être de type `string` ou `element` pour accepter à la fois des chaînes de caractères et des éléments React
    // Cela a permis de corriger une erreur dans la console en acceptant les éléments React passés pour la prop `content`
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    className: PropTypes.string,
};

export default Colapse; 
