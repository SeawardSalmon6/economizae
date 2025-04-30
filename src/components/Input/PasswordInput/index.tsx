import { useState } from "react";
import { BaseInput } from "..";
import { InputProps } from "~components/Input/types";
import styles from "~components/Input/PasswordInput/PasswordInput.module.css";
import EYE_OPEN_ICON from "~assets/img/opened-eye.svg";
import { ClosedEyeIcon } from "~icons/ClosedEyeIcon";

export function PasswordInput({ ...props }: InputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <BaseInput
      {...props}
      type={visible ? "text" : "password"}
      suffix={
        <button
          type="button"
          onClick={() => {
            setVisible((prev) => !prev);
          }}
          className={styles.setVisibleButton}
        >
          {visible ? (
            <ClosedEyeIcon />
          ) : (
            <img src={EYE_OPEN_ICON} alt="Ícone de olho aberto" />
          )}
        </button>
      }
    />
  );
}
