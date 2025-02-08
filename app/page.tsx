"use client";

import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => {
    const navigationItems = [
        { name: "Navbar", path: "/navbar" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
        { name: "Footer", path: "/footer" },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Welcome to the Navigation Home Page</h1>
            <div className={styles.navLinks}>
                {navigationItems.map((item) => (
                    <Link href={item.path} key={item.path} className={styles.button}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
