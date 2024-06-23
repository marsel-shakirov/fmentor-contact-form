import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css';

export default function Form() {
	return (
		<section className={styles.contact}>
			<ContactForm />
		</section>
	);
}
