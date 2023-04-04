import Banner from "../../components/Banner/Banner";
import ImageApropo from "../../images/ImageApropos.png"
import Dropdown from "../../components/Colapse/Dropdown";
import styles from '../APropos/Apropos.module.css'


export default function Apropos() {


  return (
    <div className={styles.test}>
     
     <Banner imgSrc={ImageApropo} showTitle={false} />
     <div className={styles.wrapApropos}> 
     <Dropdown 
     title="hdkfsdhfl"
     content="jkdshqfkdjfklq"
     />

    <Dropdown 
     title="hdkfsdhfl"
     content="jkdshqfkdjfklq"
     />
    </div>
      
</div>
    
  );
}