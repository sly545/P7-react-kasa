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
     title="hdkfsdhfl"
     content="jkdshqfkdjfklq"
     />

    <Colapse
     title="hdkfsdhfl"
     content="jkdshqfkdjfklq"
     />
    </div>
      
</div>
    
  );
}