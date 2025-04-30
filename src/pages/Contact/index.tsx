
import ContactForm from '../../components/Contact/ContactForm';
import styles from './Contact.module.css';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Contact() {
    return (
        <main className={styles.contactPage}>
            <Header />
            <ContactForm />
            <Footer />
        </main>
    );
}