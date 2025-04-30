import { Layout } from "../../../../components/Layout";
import styles from "./LoginBase.module.css";
import LOGO_IMAGE from "../../../../assets/img/logo.svg";
import LOGIN_IMAGE from "../../../../assets/img/login.jpg";
import { PropsWithChildren } from "react";

export function LoginBase({ children }: PropsWithChildren) {
  return (
    <Layout className={styles.loginWrapper}>
      <img
        src={LOGIN_IMAGE}
        alt="Mulher olhando para o celular"
        className={styles.loginImage}
      />
      <section className={styles.loginFormWrapper}>
        <img src={LOGO_IMAGE} alt="Logo" className={styles.logo} />
        {children}
      </section>
    </Layout>
  );
}
