import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { BasicBasketCard } from "./components/BasicBasketCard";
import { MarketCard } from "./components/MarketCard";
import { BASIC_BASKET_ITEMS, FEATURED_MARKETS } from "./constants";
import { Footer } from "../../components/Footer";
import styles from "./Home.module.css";

export function Home() {
  return (
    <main className={styles.economizae}>
      <Header />
      <Hero />

      <section className={styles.featuredMarkets}>
        <h2 className={styles.sectionTitle}>mercados em destaque</h2>
        <div className={styles.marketsGrid}>
          {FEATURED_MARKETS.map((market) => (
            <MarketCard key={market.id} {...market} />
          ))}
        </div>
      </section>

      <section className={styles.shoppingList}>
        <h2 className={styles.sectionTitle}>lista de compras</h2>
        <div className={styles.createList}>
          <div className={styles.createListButton}>
            <div className={styles.iconWrapper}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c21a3d9f4234c96056cf2d79cd718a70447a4412?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
                alt="Create list"
                className={styles.createIcon}
              />
            </div>
            <span className={styles.createText}>Criar lista</span>
          </div>
        </div>
      </section>

      <section className={styles.basicBasket}>
        <h2 className={styles.sectionTitle}>itens de cesta básica</h2>
        <div className={styles.basketGrid}>
          {BASIC_BASKET_ITEMS.map((item) => (
            <BasicBasketCard
              key={item.id}
              distance={item.distance}
              image={item.image}
              marketLogo={item.image}
              marketName={item.name}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
