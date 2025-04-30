import styles from "./Footer.module.css";
import WHITE_LOGO from "../../assets/img/logo-white.svg";
import clsx from "clsx";
import { FooterProps } from "./types";

export function Footer({ ...props }: FooterProps) {
  return (
    <footer {...props} className={clsx(styles.footer, props.className)}>
      <div className={styles.linksSection}>
        <img src={WHITE_LOGO} alt="Logo" className={styles.logo} />
        <div className={styles.linksList}>
          <a className={styles.link} href="#">
            sobre nós
          </a>
          <a className={styles.link} href="#">
            contato
          </a>
        </div>
        <a className={styles.link} href="#">
          políticas de privacidade
        </a>
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
