import { FormEventHandler } from "react";
import styles from "~pages/Contact/components/ContactForm/ContactForm.module.css";
import GUY_IMAGE from "~assets/img/guy.png";
import { Form } from "~components/Form";
import formStyles from "~components/Form/Form.module.css";
import { Input } from "~components/Input";
import { Button } from "~components/Button";

const ContactForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, FormDataEntryValue> = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log(JSON.stringify(data, null, 4));
    form.reset();
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
          <div className={formStyles.inputsWrapper}>
            <Input
              id="name"
              type="text"
              label="nome"
              placeholder="seu nome"
              required
            />
            <Input
              id="email"
              type="email"
              label="e-mail"
              placeholder="seu melhor e-mail"
              required
            />
            <Input
              id="phone"
              type="tel"
              label="telefone"
              placeholder="(99) 99999-9999"
              required
            />
            <Input
              id="message"
              type="text"
              placeholder="mande seu elogio, reclamação ou suporte"
              required
              label="mensagem"
              inputType="textarea"
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
