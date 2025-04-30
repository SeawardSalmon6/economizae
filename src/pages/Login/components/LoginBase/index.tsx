import LOGO_IMAGE from "~assets/img/logo.svg";
import LOGIN_IMAGE from "~assets/img/login.jpg";

import { PropsWithChildren } from "react";
import { clsx } from "clsx";
import { Button } from "~components/Button";
import { LeftChevronIcon } from "~icons/LeftChevronIcon";

import styles from "~pages/Login/components/LoginBase/LoginBase.module.css";
import { useNavigate } from "react-router";

export function LoginBase({
  centeredForm,
  children,
}: PropsWithChildren & { centeredForm?: boolean }) {
  const navigate = useNavigate();

  const backToHome = () => {
    void navigate("/");
  };

  return (
    <div className={styles.loginWrapper}>
      <Button
        className={styles.backButton}
        type="secondary"
        onClick={backToHome}
      >
        <LeftChevronIcon /> ir para início
      </Button>
      <img
        src={LOGIN_IMAGE}
        alt="Mulher olhando para o celular"
        className={styles.loginImage}
      />
      <section
        className={clsx(styles.loginFormWrapper, {
          [styles.centeredFormWrapper]: centeredForm,
        })}
      >
        <img src={LOGO_IMAGE} alt="Logo" className={styles.logo} />
        {children}
      </section>
    </div>
  );
}
