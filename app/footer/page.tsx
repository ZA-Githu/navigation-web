"use client";
import Link from "next/link";
import React from "react";
import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <h1 className="text-5xl">Footer</h1>
                <Link href="/">
                <>          
                    <h1 className={styles.link}><h2 className="text-3xl text-black text-bold">Go to Home Page</h2></h1>
                    </>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
