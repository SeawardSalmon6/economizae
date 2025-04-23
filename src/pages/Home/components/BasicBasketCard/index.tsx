import styles from "./BasicBasketCard.module.css";
import { BasicBasketCardProps } from "./types";

export function BasicBasketCard({
  distance,
  image,
  marketLogo,
  marketName,
  price,
  rating,
}: BasicBasketCardProps) {
  return (
    <article className={styles.basketCard}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt="Basic basket items"
          className={styles.basketImage}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.marketHeader}>
          <img
            src={marketLogo}
            alt={marketName}
            className={styles.marketLogo}
          />
          <h3 className={styles.marketName}>{marketName}</h3>
        </div>
        <div className={styles.ratingContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46c34139e63730a7502b35e25632bbe86604fde8?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt="Rating"
            className={styles.ratingIcon}
          />
          <p className={styles.ratingText}>
            <span className={styles.rating}>{rating}</span> • {distance}
          </p>
        </div>
        <div className={styles.priceContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94f277a33ff1e5355a7299ec86005fd1959bc7c4?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt="Price"
            className={styles.priceIcon}
          />
          <p className={styles.priceText}>{price}</p>
        </div>
      </div>
    </article>
  );
}
