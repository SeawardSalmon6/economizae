import loginBaseStyles from "./components/LoginBase/LoginBase.module.css";
import styles from "./Login.module.css";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router";
import { LoginBase } from "./components/LoginBase";

export function Login() {
  return (
    <LoginBase>
      <form className={loginBaseStyles.loginForm}>
        <div className={loginBaseStyles.inputsWrapper}>
          <Input
            label="e-mail"
            placeholder="seu e-mail"
            type="email"
            required
          />
          <Input.PasswordInput label="senha" placeholder="sua senha" required />
        </div>
        <a href="#" className={loginBaseStyles.link}>
          esqueci minha senha
        </a>
        <Button type="submit" className={styles.submitButton}>
          entrar
        </Button>
        <p className={styles.register}>
          é novo aqui?{" "}
          <Link to="/cadastre-se" className={loginBaseStyles.link}>
            cadastre-se
          </Link>
        </p>
      </form>
    </LoginBase>
  );
}
