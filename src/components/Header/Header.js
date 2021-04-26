import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>       
            <h2 className = {styles.title}>Clone likes Twitter</h2>
            <h2 className = {styles.title}>5 Запесей, из них понравилось 0

            </h2>
        </div>
    )
}

export default Header;