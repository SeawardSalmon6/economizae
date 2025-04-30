import styles from "~components/Footer/Footer.module.css";
import WHITE_LOGO from "~assets/img/logo-white.svg";
import { Link } from "react-router";
import clsx from "clsx";
import { FooterProps } from "~components/Footer/types";

export function Footer({ ...props }: FooterProps) {
  return (
    <footer {...props} className={clsx(styles.footer, props.className)}>
      <div className={styles.linksSection}>
        <img src={WHITE_LOGO} alt="Logo" className={styles.logo} />
        <div className={styles.linksList}>
          <Link className={styles.link} to="/sobre">
            sobre nós
          </Link>
          <Link className={styles.link} to="/contato">
            contato
          </Link>
        </div>
        <Link className={styles.link} to="/">
          políticas de privacidade
        </Link>
      </div>
      <div>
        <p className={styles.text}>
          © Copyright 2025 • Economizaê LTDA • Todos os direitos reservados
        </p>
        <p className={styles.text}>
          CNPJ 99.999.999/0001-99 / Avenida dos Mercados, nº 999, Vila Digital,
          São Paulo/SP - CEP 99.999-999
        </p>
      </div>
    </footer>
  );
}
