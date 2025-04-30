import { FormEventHandler, useState } from "react";
import styles from "~components/Contact/ContactForm.module.css";
import GUY_IMAGE from "~assets/img/guy.png";

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
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>}
          <div>
            <label htmlFor="name">nome *</label>
            <input
              type="text"
              id="name"
              className={styles.inputField}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="seu nome"
              required
            />
          </div>
          <div>
            <label htmlFor="email">e-mail *</label>
            <input
              type="email"
              id="email"
              className={styles.inputField}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="seu melhor e-mail"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">telefone *</label>
            <input
              type="tel"
              id="phone"
              className={styles.inputField}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="(99) 99999-9999"
              required
            />
          </div>
          <div>
            <label htmlFor="message">mensagem *</label>
            <textarea
              id="message"
              className={styles.textareaField}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="mande seu elogio, reclamação ou suporte"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            enviar mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
