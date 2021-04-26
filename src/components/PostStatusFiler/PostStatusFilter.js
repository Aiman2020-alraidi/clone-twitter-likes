import React from 'react';
import styles from './PostFilter.module.css';

const PostSatusFilter = () => {
    return (
        <div className ="btn-group"> 
            <button type="button" className={`${styles.btn} ${styles.btn_show}`}>Все</button>
            <button type="button" className={`${styles.btn} ${styles.likes_btn}`}>Понравилось</button>
        </div>
    )
}

export default PostSatusFilter;