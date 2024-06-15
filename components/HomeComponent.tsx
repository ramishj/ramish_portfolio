// HomeComponent.tsx

import React, { useState, useEffect } from 'react';
import styles from './HomeComponent.module.css'; // Adjust the path based on your file structure
import Navbar from './Navbar'; // Import the Navbar component
import imageSrc from '../public/WhatsApp Image 2023-10-25 at 02.32.04.jpeg'; // Replace with the actual path to your image

const HomeComponent: React.FC = () => {
    const [isAvailable, setIsAvailable] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showNavlinks, setShowNavlinks] = useState(false);
    const [showImage, setShowImage] = useState(false); // State to manage image visibility

    useEffect(() => {
        setTimeout(() => {
            setIsAvailable(true);
        }, 1500);

        setTimeout(() => {
            setShowBackground(true);
        }, 3500); // Delay for 3.5s after showing "Actually this page is available"

        setTimeout(() => {
            setShowDescription(true);
        }, 6500); // Delay for 6.5s after showing "Actually this page is available"

        setTimeout(() => {
            setShowNavlinks(true);
            setShowImage(true); // Show the image at the same time as other content
        }, 6500); // Delay for 6.5s after showing "Actually this page is available"
    }, []);

    return (
        <div className={styles.container}>
            <div className={`${styles.messageContainer} ${isAvailable ? styles.available : ''}`}>
                <p>{isAvailable ? 'Actually this page is available' : "This page isn't available"}</p>
            </div>

            {showBackground && (
                <div className={`${styles.whiteBackground} ${styles.showBackground}`}>
                   {showImage && (
    <div className={styles.circleImage}>
        <img src="https://i.ibb.co/7Qd186S/my-Potrait.png" alt="my-Potrait"  />
    </div>
)}

                    <div className={styles.bigText}>Hi, I'm Ramish</div>
                    {showNavlinks && <Navbar />}
                    {showDescription && (
                        <div className={`${styles.description} ${styles.showDescription}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla neque sit amet eros maximus, vel sodales eros ultricies.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default HomeComponent;
