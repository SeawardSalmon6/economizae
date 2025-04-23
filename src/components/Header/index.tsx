import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d29eeb0674064903934b06c23128168de8cc646a?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
          alt="Logo"
          className={styles.logo}
        />
        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>
            início
          </a>
          <a href="#" className={styles.navLink}>
            sobre
          </a>
          <a href="#" className={styles.navLink}>
            contato
          </a>
        </div>
      </nav>
      <div className={styles.userSection}>
        <p className={styles.address}>r. irmã heloisa helen... 404</p>
        <div className={styles.locationIcon}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de3eef38365ef7dcfe51b3781d9a2a224f16713c?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt="Location"
          />
        </div>
        <button type="button"  className={styles.loginButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1045163c5c8c41229625baa324bb5ee7fbc788da?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt="Login"
            className={styles.loginIcon}
          />
          <span>Logar</span>
        </button>
      </div>
    </header>
  );
}
