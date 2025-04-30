import styles from "./MarketCard.module.css";
import { MarketCardProps } from "./types";

export function MarketCard({
  market
}: MarketCardProps) {
  return (
    <article className={styles.marketCard}>
      <img src={market.image} alt={market.name} className={styles.marketImage} />
      <div className={styles.marketInfo}>
        <h3 className={styles.marketName}>{market.name}</h3>
        <div className={styles.ratingContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46c34139e63730a7502b35e25632bbe86604fde8?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt="Rating"
            className={styles.ratingIcon}
          />
          <p className={styles.ratingText}>
            <span className={styles.rating}>{market.rating}</span> • {market.distance}
          </p>
        </div>
        <div className={styles.priceContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94f277a33ff1e5355a7299ec86005fd1959bc7c4?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt="Price"
            className={styles.priceIcon}
          />
          <p className={styles.priceText}>{market.price}</p>
        </div>
      </div>
    </article>
  );
}
