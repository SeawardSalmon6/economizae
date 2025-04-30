import { ButtonProps } from "./types";
import styles from "./Button.module.css";
import clsx from "clsx";

export function Button({
  type = "button",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button {...props} type={type} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
}
