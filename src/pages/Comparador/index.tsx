import { Filter, ChevronRight, Search, Trash } from "lucide-react";
import { BASIC_BASKET_PRODUCTS, FEATURED_MARKETS } from "~pages/Home/constants";
import { Layout } from "~components/Layout";
import styles from "~pages/Comparador/Comparador.module.css";
import { MarketCard } from "~pages/Home/components/MarketCard";
import { clsx } from "clsx";

export function Comparador() {
  return (
    <Layout>
      <div className={styles.economizae}>
        <section className={clsx(styles.featuredMarkets, "wrapperContainer")}>
          <h3 className={styles.pageSection}>início / cesta básica</h3>
          <h1 className={styles.Title}>comparador</h1>

          {/* Header */}
          <div className={styles.sectionFilter}>
            <h2 className={styles.sectionTitle}>mercados</h2>
            <div className={styles.filterWrapper}>
              <Filter size={20} />
            </div>
          </div>

          {/* Carousel for Market Cards */}
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer} id="carousel">
              <div className={styles.carouselTrack}>
                {FEATURED_MARKETS.map((market) => (
                  <div className={styles.carouselItem} key={market.id}>
                    <MarketCard market={market} />
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Button */}
            <button type="button"
              className={styles.scrollButton}
              onClick={() => {
                const carousel = document.getElementById("carousel");
                if (carousel) {
                  const scrollAmount = 300;
                  const currentScroll = carousel.scrollLeft;
                  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
                  
                  // If we're at or near the end, scroll back to beginning
                  if (currentScroll + scrollAmount >= maxScroll) {
                    carousel.scrollTo({ left: 0, behavior: "smooth" });
                  } else {
                    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
                  }
                }
              }}
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Search bar */}
          <div className={styles.searchBar}>
            <Search size={20} color="var(--primary-green)" />
            <input
              type="text"
              placeholder="busque por produto"
              className={styles.searchInput}
            />
          </div>

          {/* Items section */}
          <section className={styles.basicBasketSection}>
            <h2 className={styles.sectionTitle}>itens de cesta básica</h2>
            <div className={styles.basketGrid}>
              {BASIC_BASKET_PRODUCTS.map((item) => (
                <div key={item.id} className={styles.productCard}>
                  <div>
                    <div className={styles.productHeader}>
                      <div className={styles.productImage}>{item.image}</div>
                      <div className={styles.productInfo}>
                        <div className={styles.productPrice}>{item.price}</div>
                        <div className={styles.productName}>{item.name}</div>
                      </div>
                      
                    </div>
                    <button type="button" className={styles.trashButton}>
                        <Trash size={15} strokeWidth={1.5} />
                  </button>
                    {item.tag && (
                      <div className={styles.productTag}>
                        {item.tag}
                      </div>
                    )}
                    
                    <div className={styles.productAvailability}>
                      <span className={styles.availabilityDot}></span>
                      {item.availability}
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </Layout>
  );
}