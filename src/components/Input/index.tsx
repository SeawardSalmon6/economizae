import { clsx } from "clsx";

import styles from "~components/Input/Input.module.css";
import { InputProps } from "~components/Input/types";
import { PasswordInput } from "~components/Input/PasswordInput";

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
          name={props.id}
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
