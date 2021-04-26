import React from 'react';
import styles from './SearchPanel.module.css';

const SearchPanel = () => {
    return (
        <div className={styles.form}>
            <input className= {styles.input} type="text" placeholder=" Поиск по записам"/>
        </div>
    )
}

export default SearchPanel;