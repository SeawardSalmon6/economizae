import { ButtonProps } from "~components/Button/types";
import styles from "~components/Button/Button.module.css";
import clsx from "clsx";

export function Button({
  type = "primary",
  htmlType = "button",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={htmlType}
      className={clsx(styles.button, styles[type], className)}
    >
      {children}
    </button>
  );
}
