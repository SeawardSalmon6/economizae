import cestaBasicaImg from '../../../../assets/img/cesta-basica.png';
import styles from "./BasicBasketCard.module.css";
import { BasicBasketCardProps } from "./types";

export function BasicBasketCard({
  market,
}: BasicBasketCardProps) {
  return (
    <article className={styles.basketCard}>
      <div className={styles.imageContainer}>
        <img
          src={cestaBasicaImg}
          alt=""
          className={styles.basketImage}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.marketHeader}>
          <img
            src={market.image}
            alt={market.name}
            className={styles.marketLogo}
          />
          <h3 className={styles.marketName}>{market.name}</h3>
        </div>
        <div className={styles.ratingContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46c34139e63730a7502b35e25632bbe86604fde8?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt=""
            className={styles.ratingIcon}
          />
          <p className={styles.ratingText}>
            <span className={styles.rating}>{market.rating}</span> • {market.distance}
          </p>
        </div>
        <div className={styles.priceContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94f277a33ff1e5355a7299ec86005fd1959bc7c4?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt=""
            className={styles.priceIcon}
          />
          <p className={styles.priceText}>{market.price}</p>
        </div>
      </div>
    </article>
  );
}
