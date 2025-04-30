import { useState } from "react";
import { BaseInput } from "..";
import { InputProps } from "../types";
import styles from "./PasswordInput.module.css";
import EYE_OPEN_ICON from "../../../assets/img/opened-eye.svg";
import EYE_CLOSED_ICON from "../../../assets/img/closed-eye.svg";

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
            <img src={EYE_CLOSED_ICON} alt="Ícone de olho fechado" />
          ) : (
            <img src={EYE_OPEN_ICON} alt="Ícone de olho aberto" />
          )}
        </button>
      }
    />
  );
}
