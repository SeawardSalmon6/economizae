import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>© 2025 Economizaê. Todos os direitos reservados.</p>
        <div className={styles.contactInfo}>
          <p className={styles.contactItem}>
            <strong>Endereço:</strong> Rua Exemplo, 123, São Paulo, SP
          </p>
          <p className={styles.contactItem}>
            <strong>Email:</strong> contato@economizae.com
          </p>
          <p className={styles.contactItem}>
            <strong>Telefone:</strong> (11) 1234-5678
          </p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com/economizae" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Facebook
          </a>
          <a href="https://instagram.com/economizae" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}