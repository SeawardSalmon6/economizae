import { clsx } from "clsx";
import styles from "~components/Header/Header.module.css";
import { HeaderProps } from "~components/Header/types";
import { Link } from "react-router";
import LOGO from "~assets/img/logo.svg";
import { ScanBarcode } from 'lucide-react';

export function Header({ ...props }: HeaderProps) {
  return (
    <header
      {...props}
      className={clsx(styles.header, props.className, "wrapperContainer")}
    >
      <nav className={styles.navigation}>
        <Link to="/">
          <img src={LOGO} alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.link}>
            início
          </Link>
          <Link to="/sobre" className={styles.link}>
            sobre
          </Link>
          <Link to="/contato" className={styles.link}>
            contato
          </Link>
        </div>
      </nav>
      <div className={styles.userSection}>
        <a className={styles.loginButton}>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.12696 7.95497C6.12696 9.06 7.02196 9.955 8.12696 9.955C9.23196 9.955 10.127 9.06 10.127 7.95497V7.91797C10.127 6.81297 9.23196 5.91797 8.12696 5.91797C7.02196 5.91797 6.12696 6.81297 6.12696 7.91797M1.25391 8.045V7.873C1.25391 4.077 4.33091 1 8.12696 1C11.923 1 15 4.077 15 7.873V8.045C15 11.506 10.618 16.716 8.85196 18.676C8.46296 19.108 7.79096 19.108 7.40196 18.676C5.63591 16.716 1.25391 11.506 1.25391 8.045Z"
              stroke="#05833E"
              strokeWidth="1.4468"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className={styles.link}>são josé do rio preto, sp</p>
        </a>

        <a className={styles.loginButton}>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25329 11.9993H10.0035M5.25329 8.12369H12.0038M1 2.77735V17.4998C1 18.2435 1.7817 18.7274 2.44645 18.3945L3.21816 18.0086C3.50006 17.8677 3.83092 17.8677 4.11181 18.0086L5.88517 18.8943C6.16606 19.0352 6.49795 19.0352 6.77885 18.8943L8.55217 18.0086C8.83306 17.8677 9.16495 17.8677 9.44585 18.0086L11.2192 18.8943C11.5011 19.0352 11.8319 19.0352 12.1138 18.8943L13.8852 18.0086C14.1671 17.8677 14.498 17.8677 14.7799 18.0086L15.5525 18.3945C16.2183 18.7274 17 18.2435 17 17.4998V2.77735C17 1.79572 16.2043 1 15.2227 1H2.77732C1.79569 1 1 1.79572 1 2.77735Z"
              stroke="#05833E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className={styles.link}>listas</p>
        </a>
        <Link className={clsx(styles.loginButton, styles.addProductButton)} to="/cadastrar-produto">
          <ScanBarcode strokeWidth={1.8} size={21} strokeLinejoin="round" strokeLinecap="round" />
          <p className={clsx(styles.link, styles.addProductButtonText)}>Cadastrar produto</p>
        </Link>
        <Link className={clsx(styles.loginButton, styles.link)} to="/login">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 19C1 16.2187 3.27538 13.966 6.08283 13.966H11.9173C14.7247 13.966 17 16.2187 17 19M9.00075 9.64497C11.4098 9.64497 13.3638 7.71058 13.3638 5.32248C13.3638 2.93583 11.4098 1 9.00075 1C6.59021 1 4.63617 2.93583 4.63617 5.32248C4.63617 7.71058 6.59021 9.64497 9.00075 9.64497Z"
              stroke="#05833E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>logar</span>
        </Link>
      </div>
    </header>
  );
}
