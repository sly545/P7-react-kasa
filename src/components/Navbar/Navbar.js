import React from 'react'
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css"
import logo from "../../images/logo.png"


export default function Navbar() {
    return (
        <div className={styles.wrap}>
            <img className={styles.logo} src={logo} alt= "logo"/>
    <ul className={styles.liste}>   
     <nav className= {styles.nav}> 
         <li> 
        <Link className={styles.home} to="/"> Home </Link>
        </li>
        
        <li> 
        <Link className={styles.apropo} to="/APropos">A propos</Link>
        </li>
        </nav>
     </ul> 
     </div>
    )
}



