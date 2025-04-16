"use client";
import React from "react";
import styles from "./CategoryButton.module.css";

type CategoryButtonProps = {
  label: string;
};

export function CategoryButton(props: CategoryButtonProps) {
  return <button className={styles.categoryButton}>{props.label}</button>;
}
