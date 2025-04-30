import formStyles from "~components/Form/Form.module.css";
import loginBaseStyles from "~pages/Login/components/LoginBase/LoginBase.module.css";
import styles from "~pages/Login/Login.module.css";

import { Input } from "~components/Input";
import { Button } from "~components/Button";
import { Link } from "react-router";
import { LoginBase } from "~pages/Login/components/LoginBase";
import { Form } from "~components/Form";

export function Login() {
  return (
    <LoginBase centeredForm>
      <Form className={loginBaseStyles.loginForm}>
        <div className={formStyles.inputsWrapper}>
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
        <Button htmlType="submit" className={styles.submitButton}>
          entrar
        </Button>
        <p className={styles.register}>
          é novo aqui?{" "}
          <Link to="/cadastre-se" className={loginBaseStyles.link}>
            cadastre-se
          </Link>
        </p>
      </Form>
    </LoginBase>
  );
}
