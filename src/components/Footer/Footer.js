import logoFooter from "../../assets/LogoSvg.svg"
import styles from "../Footer/Footer.module.css"
export default function Footer() {
    
    return (
        <div> 
            <div className={styles.back}> 
            <img className={styles.logoFooter} src={logoFooter} alt= "logoFooter"/>
            <p className={styles.copyRight}>© 2020 Kasa. All rights reserved</p>
           
            </div>
        </div>
      
    )
}

