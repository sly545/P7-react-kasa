import Banner from "../../components/Banner/Banner";
import ImageApropo from "../../images/ImageApropos.png"
import Colapse from "../../components/Colapse/Colapse";
import styles from '../APropos/Apropos.module.css'


export default function Apropos() {


  return (
    <div className={styles.test}>
     
     <Banner imgSrc={ImageApropo} showTitle={false} />
     <div className={styles.wrapApropos}> 
     <Colapse 
     title="Fiabilité"
     content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
     />
     


    <Colapse
     title="Respect"
     content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
     />
     
    <Colapse
     title="Service"
     content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
     />
    <div className={styles.espacement}> 
    <Colapse
     title="Sécurité"
     content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
     />
     </div>
    </div>
      
</div>
    
  );
}