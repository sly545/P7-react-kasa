import { Link } from "react-router-dom";
import styles from "../notfound/Notfound.module.css";
import ImageEreure from "../../images/404.svg";

export default function Notfound() {
  return (
    <div>
      <div className={styles.wrap}>
        <img
          className={styles.ImageEreure}
          src={ImageEreure}
          alt="message ereur la page n'est pas trouver"
        />
        <p className={styles.MessageEreur}>
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
        <Link className={styles.lien} to="/">
          Retourner sur la page d&apos;accueil
        </Link>
      </div>
    </div>
  );
}
