
import ContactForm from '../../components/Contact/ContactForm';
import styles from './Contact.module.css';
import { Layout } from '../../components/Layout';

export function Contact() {
    return (
        <Layout className={styles.contactPage}>
            <ContactForm />
        </Layout>
    );
}