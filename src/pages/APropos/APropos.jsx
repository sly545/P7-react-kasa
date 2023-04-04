import CollapseSection from "../../components/Colapse/ColapseAbout";
import FleshTop from '../../assets/fleshTop.png';
import FleshBottom from '../../assets/fleshBottom.png';
import Banner from "../../components/Banner/Banner";
import ImageApropo from "../../images/ImageApropos.png"


export default function Apropos() {


  return (
    <div>
     
     <Banner imgSrc={ImageApropo} showTitle={false} />


     <CollapseSection
  title="Fiabilité"
  description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  fleshTop={FleshTop}
  fleshBottom={FleshBottom}
/>
<CollapseSection
  title="Respect"
  description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  fleshTop={FleshTop}
  fleshBottom={FleshBottom}
/>
<CollapseSection
  title="Service"
  description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  fleshTop={FleshTop}
  fleshBottom={FleshBottom}
/>
<CollapseSection
  title="Sécurité"
  description="Sécurité
  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.."
  fleshTop={FleshTop}
  fleshBottom={FleshBottom}
/>
</div>
    
  );
}