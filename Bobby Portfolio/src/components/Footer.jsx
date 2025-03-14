import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/footer.css';

const styles = {
    footer: {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    icon: {
        margin: '0 10px',
        color: '#007bff',
        textDecoration: 'none',
    },
    text: {
        color: '#6c757d',
    },
};


const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.iconContainer}>
                <a href="https://www.linkedin.com/in/rstrick99" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/GoldenBobbyG" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaGithub size={30} />
                </a>
            </div>
            <p style={styles.text}>© 2025 Robb Strickland. All rights reserved.</p>
        </footer>
    );
};

export default Footer;