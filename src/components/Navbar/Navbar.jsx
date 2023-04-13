import { useLocation } from "react-router-dom";//retourne l'objet de l'emplacement courant.
import { Link } from "react-router-dom";// Importer le composant Link pour créer des liens vers d'autres pages
import styles from "../Navbar/Navbar.module.css";
import logo from "../../images/logo.png";

export default function Navbar() {
  const location = useLocation();

  const activeStyle = {
    textDecoration: "underline", //J'ai utilisé la constante "activeStyle" pour ajouter un soulignement 
                                 //au lien actif dans la navbar car je n'ai pas réussi à le faire directement en utilisant les modules CSS.
  };

  return (
    <div className={styles.wrapNav}>
      <img className={styles.logo} src={logo} alt="logo" />
      <ul className={styles.liste}>
        <nav className={styles.nav}>
          <li>
            <Link
              className={styles.home}
              to="/"
              style={location.pathname === "/" ? activeStyle : {}}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={styles.apropo}
              to="/APropos"
              style={location.pathname === "/APropos" ? activeStyle : {}}
            >
              A Propos
            </Link>
          </li>
        </nav>
      </ul>
    </div>
  );
}