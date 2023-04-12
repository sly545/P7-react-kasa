import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousell from '../../components/Carrousell/Carrousell';
import styles from '../Accomodation/Accomodation.module.css';
import Proprio from '../../components/Proprio/Propio';
import Colapse from '../../components/Colapse/Colapse';

export default function Accomodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accomodations, setAccomodations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then(response => response.json())
      .then(data => {
        setAccomodations(data);
        setIsLoading(false);
      });
  }, []);

  const accomodation = accomodations.find(a => a.id === id);
  
  // Hook d'effet pour rediriger l'utilisateur vers la page "non trouvée" si l'hébergement demandé n'est pas trouvé
  useEffect(() => {
    if (!isLoading && !accomodation) {
      navigate('/notfound');
    }
  }, [isLoading, accomodation, navigate]);
  
    // Si les données sont en cours de chargement ou si l'hébergement n'est pas trouvé, ne rien renvoyer
    if (isLoading || !accomodation) {
    return null;
  }
   
  // Renvoie un élément `div` contenant un carrousel d'images et des informations sur l'hébergement
  return (
    <div>
      <div className={styles.Wrap}>
        <Carousell accomodation={accomodation} />
        <div className={styles.conteneurWrap}>
          <div className={styles.contenerProprio}>
            <div className={styles.apart}>
              <div className={styles.locali}>
                <span>
                  <h3 className={styles.title}>{accomodation.title}</h3>
                  <p className={styles.lieu}>{accomodation.location}</p>
                </span>
              </div>
              <div className={styles.uli}>
                <ul className={styles.cartier}>
                  {accomodation.tags.map((equipment, index) => (
                    <li className={styles.listCartier} key={index}>
                      {equipment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.propri}>
              <Proprio accomodation={accomodation} />
            </div>
          </div>
        
            <div className={styles.contenerEquipeDescript}>
              <div className={styles.tailleDes}>
                <Colapse
                  title="Description"
                  content={accomodation.description}
                />
              </div>
              <div className={styles.tailleEqui}>
                <Colapse
                  title="Equipement"
                  content={
                    <ul className={styles.liste}>
                      {accomodation.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                      ))}
                    </ul>
                  } 
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}