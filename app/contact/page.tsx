import styles from '@/styles/Contact.module.css';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <h1>Contact Us</h1>
                <p>For inquiries, please reach out to us.</p>
                <Link href="/">
                    <h2 className={styles.link}>Go to Home Page</h2>
                </Link>
            </div>
        </div>
    );
};

export default Contact;
