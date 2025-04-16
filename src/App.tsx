import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarketCard } from "./components/MarketCard";
import { BasicBasketCard } from "./components/BasicBasketCard";

export function App() {
    const featuredMarkets = [
      {
        name: "Super Muffato Dahma",
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/985827c10493b5ea9c21ee5bfdbfbc9735b9fd97?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
        rating: "4.8",
        distance: "1.7km",
        price: "Aqui sua lista fica por R$ 103,87",
      },
      {
        name: "Pão de Açúcar - Dahma",
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/ab3dee75a78cd4e8382da751a2a711f50b742988?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
        rating: "4.8",
        distance: "2.9km",
        price: "Aqui sua lista fica por R$ 129,03",
      },
      {
        name: "Proença Supermercados D...",
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/8f0c9193d81e374c2cb66a0463c55e6cc7f8109c?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
        rating: "4.8",
        distance: "1.7km",
        price: "Aqui sua lista fica por R$ 156,90",
      },
    ];
  
    const basicBasketItems = [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/af96180ded4af9db807a2d76683eea3a8ae724e7?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
        marketLogo:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/69c83a3adeffd7c40a12c99aa774b5fbc34e0c66?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
        marketName: "Pão de Açúcar - Dahma",
        rating: "4.8",
        distance: "2.9km",
        price: "Aqui a cesta básica fica por R$ 129,03",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/af96180ded4af9db807a2d76683eea3a8ae724e7?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
        marketLogo:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/68c474d771f0a936706a080c838eb8fc0407e8b7?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
        marketName: "Super Muffato Dahma",
        rating: "4.8",
        distance: "2.9km",
        price: "Aqui a cesta básica fica por R$ 129,03",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/af96180ded4af9db807a2d76683eea3a8ae724e7?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
        marketLogo:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/14e2507f211c36381ef9bb6007bf5b9453b2455b?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
        marketName: "Proença Supermercados LTDA",
        rating: "4.8",
        distance: "2.9km",
        price: "Aqui a cesta básica fica por R$ 129,03",
      },
    ];
  
    return (
      <main className={styles.economizae}>
        <Header />
        <Hero />
  
        <section className={styles.featuredMarkets}>
          <h2 className={styles.sectionTitle}>mercados em destaque</h2>
          <div className={styles.marketsGrid}>
            {featuredMarkets.map((market, index) => (
              <MarketCard key={index} {...market} />
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
            {basicBasketItems.map((item, index) => (
              <BasicBasketCard key={index} {...item} />
            ))}
          </div>
        </section>
      </main>
    );
  }
  
  
  