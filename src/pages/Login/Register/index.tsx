import { Link } from "react-router";
import { Button } from "~components/Button";
import { Input } from "~components/Input";
import { LoginBase } from "~pages/Login/components/LoginBase";
import loginBaseStyles from "~pages/Login/components/LoginBase/LoginBase.module.css";
import styles from "~pages/Login/Register/Register.module.css";

export function Register() {
  return (
    <LoginBase>
      <div className={styles.registerHeader}>
        <h1 className={styles.title}>faça seu cadastro</h1>
        <p className={styles.registerText}>
          compare preços, faça listas de compra e prepare-se para economizar
        </p>
      </div>
      <form className={loginBaseStyles.loginForm}>
        <div className={loginBaseStyles.inputsWrapper}>
          <Input label="nome" placeholder="seu nome" type="text" required />
          <Input
            label="telefone"
            placeholder="seu telefone"
            type="tel"
            required
          />
          <Input
            label="e-mail"
            placeholder="seu e-mail"
            type="email"
            required
          />
          <Input.PasswordInput label="senha" placeholder="sua senha" required />
          <Input.PasswordInput
            label="repita a senha"
            placeholder="sua senha"
            required
          />
        </div>
        <Button className={styles.submitButton}>cadastrar</Button>
        <p className={styles.login}>
          já possui conta?{" "}
          <Link to="/login" className={loginBaseStyles.link}>
            logar
          </Link>
        </p>
      </form>
    </LoginBase>
  );
}
