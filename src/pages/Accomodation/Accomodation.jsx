import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Manege from '../../components/Carrousell/Carrousell';
import styles from '../Accomodation/Accomodation.module.css';
import Colapse from '../../components/Colapse/Colapse';

export default function Accomodation() {
  const { id } = useParams();
  const [accomodations, setAccomodations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then(response => response.json())
      .then(data => setAccomodations(data));
  }, []);

  const accomodation = accomodations.find(a => a.id === id);

  return (
    <div>
     
      {accomodation && (
        <div>
          <Manege accomodation={accomodation}/>
          
          <div className={styles.conteneurWrap} >
              <div className={styles.wrapGauche}>
                <div>
                  <h3 className={styles.title} >{accomodation.title}</h3>
                  <p className={styles.lieu} >{accomodation.location}</p>
                </div>

            <ul className={styles.cartier}>
              {accomodation.tags.map((equipment, index) => (
               <li className={styles.listCartier} key={index}>{equipment}</li>
              ))}
            </ul>
                <Colapse accomodation={accomodation} />
              </div>

              <div className={styles.wrapDroite}>   
                <p>{accomodation.host.name}</p>
                <img src={accomodation.host.picture} alt={accomodation.host.name} />
                <p>{accomodation.rating}</p>
            <ul>
              {accomodation.equipments.map((equipment, index) => (
               <li className={styles.listeEquipe} key={index}>{equipment}</li>
              ))}
            </ul>
            </div>
          </div>
      </div>
      )}
    </div>
  );
}

