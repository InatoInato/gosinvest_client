import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.side}>
        <h1>
          <Link to="/"  className={styles.logo}>GOSinvest</Link>
        </h1>
      </div>

      <nav className={styles.nav}>
        <Link className={styles.link} to="/investor">Инвестору</Link>
        <Link className={styles.link} to="/">Бизнесу</Link>
        <Link className={styles.link} to="/help">Помощь</Link>
      </nav>

      <div className={styles.right}>
        <Link to="/auth" className={styles.login}>Войти</Link>
      </div>
    </header>
  );
}
