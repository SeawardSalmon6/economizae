import styles from "./Hero.module.css";
import { CategoryButton } from "../../pages/Home/components/CategoryButton";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          os melhores preços, nos melhores mercados, perto de você.
        </h1>
        <div className={styles.searchBar}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3af3c167c5ada49bb5596446410a9399abb9dae?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt="Search"
            className={styles.searchIcon}
          />
          <input
            type="text"
            placeholder="busque por produto ou mercado"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.categories}>
        <CategoryButton label="açougue" />
        <CategoryButton label="bebidas" />
        <CategoryButton label="hortifruti" />
        <CategoryButton label="conveniência" />
        <CategoryButton label="limpeza" />
      </div>
    </section>
  );
}
