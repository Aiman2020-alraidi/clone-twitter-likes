import React from 'react';
import  styles from './PostListItem.module.css';
const PostListItem = () => {
    return (
        <li className={styles.app_list}>
            <span className ={styles.item_label}> Hello World</span>
            <div className={styles.icons}>
                <button type="button" className={`${styles.btn} ${styles.star}`}>
                    <i className="fas fa-star"></i>
                </button>
                <button type="button" className={`${styles.btn} ${styles.trash}`}>
                    <i className="fas fa-trash"></i>
                </button>
                <span className={styles.heart}>
                     <i className="btn fas fa-heart"></i>
                </span>
                    
            </div>
        </li>
    )
}

export default PostListItem;