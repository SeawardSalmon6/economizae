import styles from "./Hero.module.css";
// import { CategoryButton } from "../../pages/Home/components/CategoryButton";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          os melhores preços, nos melhores mercados, perto de você.
        </h1>
        <div className={styles.searchBar}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 25L19.0663 19.0663M19.0504 4.09741C23.1803 8.22729 23.1803 14.9205 19.0504 19.0504C14.9205 23.1803 8.22729 23.1803 4.09741 19.0504C-0.0324707 14.9205 -0.0324707 8.22729 4.09741 4.09741C8.22729 -0.0324707 14.9205 -0.0324707 19.0504 4.09741Z" stroke="#05833E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
          <input
            type="text"
            placeholder="busque por produto ou mercado"
            className={styles.searchInput}
          />
        </div>
      </div>
      {/* <div className={styles.categories}>
        <CategoryButton label="açougue" />
        <CategoryButton label="bebidas" />
        <CategoryButton label="hortifruti" />
        <CategoryButton label="conveniência" />
        <CategoryButton label="limpeza" />
      </div> */}
    </section>
  );
}
