import ContactForm from "~pages/Contact/components/ContactForm";
import styles from "~pages/Contact/Contact.module.css";
import { Layout } from "~components/Layout";

export function Contact() {
  return (
    <Layout className={styles.contactPage}>
      <ContactForm />
    </Layout>
  );
}
