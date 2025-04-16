"use client";
import React from "react";
import styles from "./MarketCard.module.css";

type MarketCardProps = {
  name: string;
  image: string;
  rating: string;
  distance: string;
  price: string;
};

export function MarketCard(props: MarketCardProps) {
  return (
    <article className={styles.marketCard}>
      <img src={props.image} alt={props.name} className={styles.marketImage} />
      <div className={styles.marketInfo}>
        <h3 className={styles.marketName}>{props.name}</h3>
        <div className={styles.ratingContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46c34139e63730a7502b35e25632bbe86604fde8?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt="Rating"
            className={styles.ratingIcon}
          />
          <p className={styles.ratingText}>
            <span className={styles.rating}>{props.rating}</span> •{" "}
            {props.distance}
          </p>
        </div>
        <div className={styles.priceContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94f277a33ff1e5355a7299ec86005fd1959bc7c4?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88"
            alt="Price"
            className={styles.priceIcon}
          />
          <p className={styles.priceText}>{props.price}</p>
        </div>
      </div>
    </article>
  );
}
