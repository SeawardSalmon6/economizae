import { ButtonProps } from "~components/Button/types";
import styles from "~components/Button/Button.module.css";
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
