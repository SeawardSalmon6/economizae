import styles from "~pages/Home/components/CategoryButton/CategoryButton.module.css";
import { CategoryButtonProps } from "~pages/Home/components/CategoryButton/types";

export function CategoryButton({ label }: CategoryButtonProps) {
  return (
    <button type="button" className={styles.categoryButton}>
      {label}
    </button>
  );
}
