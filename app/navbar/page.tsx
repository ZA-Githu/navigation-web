"use client";
import styles from '@/styles/About.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar} >
                <h1 className='text-5xl text-white text-bold'>Navbar</h1>
                <Link href="/">
                <div className='text-5xl text-white text-bold'>
                    <h2 className={styles.link} >Go to Home Page</h2>
                </div>
                    
                </Link>
            </div>
        </div>
    );
};

export default Navbar;

