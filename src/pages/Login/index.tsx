import { Layout } from "../../components/Layout";
import styles from "./Login.module.css";
import LOGO_IMAGE from "../../assets/img/logo.svg";
import LOGIN_IMAGE from "../../assets/img/login.jpg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router";

export function Login() {
  return (
    <Layout className={styles.loginWrapper}>
      <img
        src={LOGIN_IMAGE}
        alt="Mulher olhando para o celular"
        className={styles.loginImage}
      />
      <section className={styles.loginFormWrapper}>
        <img src={LOGO_IMAGE} alt="Logo" className={styles.logo} />
        <form className={styles.loginForm}>
          <div className={styles.inputsWrapper}>
            <Input
              label="e-mail"
              placeholder="seu e-mail"
              type="email"
              required
            />
            <Input.PasswordInput
              label="senha"
              placeholder="sua senha"
              type="email"
              required
            />
          </div>
          <a href="#" className={styles.link}>
            esqueci minha senha
          </a>
          <Button type="submit" className={styles.submitButton}>
            entrar
          </Button>
          <p className={styles.register}>
            é novo aqui?{" "}
            <Link to="/cadastre-se" className={styles.link}>
              cadastre-se
            </Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}
