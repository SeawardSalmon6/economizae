import { clsx } from "clsx";

import styles from "./Input.module.css";
import { InputProps } from "./types";
import { PasswordInput } from "./PasswordInput";

export function BaseInput({ label, suffix, required, ...props }: InputProps) {
  return (
    <div className={styles.inputRoot}>
      {label && (
        <label className={styles.label} aria-required={required}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          {...props}
          className={clsx(props.className, styles.input, {
            [styles.hasSuffix]: suffix,
          })}
        />
        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
    </div>
  );
}

BaseInput.PasswordInput = PasswordInput;
BaseInput.displayName = "BaseInput";

export const Input = BaseInput;
