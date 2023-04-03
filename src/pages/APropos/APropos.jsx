import CollapseSection from "../../components/Colapse/ColapseAbout";
import FleshTop from '../../assets/fleshTop.png';
import FleshBottom from '../../assets/fleshBottom.png';

export default function Apropos() {


  return (
    <div>
     <CollapseSection
  title="Fiabilité"
  description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  fleshTop={FleshTop}
  fleshBottom={FleshBottom}
/>
    </div>
  );
}