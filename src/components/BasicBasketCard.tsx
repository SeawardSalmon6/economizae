"use client";
import React from "react";
import styles from "./BasicBasketCard.module.css";

type BasicBasketCardProps = {
  image: string;
  marketLogo: string;
  marketName: string;
  rating: string;
  distance: string;
  price: string;
};

export function BasicBasketCard(props: BasicBasketCardProps) {
  return (
    <article className={styles.basketCard}>
      <div className={styles.imageContainer}>
        <img
          src={props.image}
          alt="Basic basket items"
          className={styles.basketImage}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.marketHeader}>
          <img
            src={props.marketLogo}
            alt={props.marketName}
            className={styles.marketLogo}
          />
          <h3 className={styles.marketName}>{props.marketName}</h3>
        </div>
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
