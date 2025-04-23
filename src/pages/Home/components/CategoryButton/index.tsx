import styles from "./CategoryButton.module.css";
import { CategoryButtonProps } from "./types";

export function CategoryButton({ label }: CategoryButtonProps) {
  return (
    <button type="button" className={styles.categoryButton}>
      {label}
    </button>
  );
}
