import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import logo from "../../images/logo.png";

export default function Navbar() {
  const location = useLocation();

  const activeStyle = {
    textDecoration: "underline",
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