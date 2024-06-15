// Navbar.tsx

import React from 'react';
import styles from './Navbar.module.css'; // Adjust the path based on your file structure

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navlinks}>
                <a href="#home" className={styles.navlink}>Home</a>
                <a href="#about" className={styles.navlink}>About Me</a>
                <a href="#projects" className={styles.navlink}>Projects</a>
                <a href="#connect" className={styles.navlink}>Connect</a>
            </div>
        </div>
    );
};

export default Navbar;
