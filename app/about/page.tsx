"use client";
import styles from '@/styles/About.module.css';
import Link from 'next/link';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about} >
                <h1 className='text-3xl text-white'>About Us</h1>
                <p className='text-3xl text-white'>Learn more about our company and values.</p>
                <Link href="/">
                    <h2 className={styles.link} > Go to Home Page</h2>
                </Link>
            </div>
        </div>
    );
};

export default About;
