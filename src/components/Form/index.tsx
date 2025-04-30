import clsx from "clsx";
import { FormProps } from "react-router";
import styles from "~components/Form/Form.module.css";

export function Form({ children, ...props }: FormProps) {
  return (
    <form {...props} className={clsx(styles.form, props.className)}>
      {children}
    </form>
  );
}
