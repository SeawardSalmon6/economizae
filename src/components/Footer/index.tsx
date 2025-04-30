import styles from "./Footer.module.css";
import logo from "../../assets/img/logo-white.svg"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.linksSection}>
                <img
                    src={logo}
                    alt="Logo"
                    className={styles.logo}
                />
                <div className={styles.linksList}>
                    <a className={styles.link} href="#">sobre nós</a>
                    <a className={styles.link} href="#">contato</a>
                </div>
                <a className={styles.link} href="#">políticas de privacidade</a>
            </div>
            <div>
                <p className={styles.text}>© Copyright 2025 • Economizaê LTDA • Todos os direitos reservados</p>
                <p className={styles.text}>CNPJ 99.999.999/0001-99 / Avenida dos Mercados, nº 999, Vila Digital, São Paulo/SP - CEP 99.999-999</p>
            </div>
        </footer>
    );
}
