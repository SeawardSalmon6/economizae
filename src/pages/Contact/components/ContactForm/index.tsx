import { FormEventHandler, useState } from "react";
import styles from "~pages/Contact/components/ContactForm/ContactForm.module.css";
import GUY_IMAGE from "~assets/img/guy.png";
import { Form } from "~components/Form";
import formStyles from "~components/Form/Form.module.css";
import { Input } from "~components/Input";
import { Button } from "~components/Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    setError("");
    console.log("Formulário enviado:", { name, email, phone, message });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageSection}>
        <img src={GUY_IMAGE} alt="Person holding smartphone" />
      </div>
      <div className={styles.formSection}>
        <h1>mande sua mensagem</h1>
        <p>iremos amar ouvir você!</p>
        <Form onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>}
          <div className={formStyles.inputsWrapper}>
            <Input
              id="name"
              type="text"
              label="nome"
              placeholder="seu nome"
              required
              onInput={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              id="email"
              type="email"
              label="e-mail"
              placeholder="seu melhor e-mail"
              required
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              id="phone"
              type="tel"
              label="telefone"
              placeholder="(99) 99999-9999"
              required
              onInput={(e) => {
                setPhone(e.target.value);
              }}
            />
            <Input
              id="message"
              type="text"
              placeholder="mande seu elogio, reclamação ou suporte"
              required
              label="mensagem"
              onInput={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <Button htmlType="submit" className={styles.submitButton}>
            enviar mensagem
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
