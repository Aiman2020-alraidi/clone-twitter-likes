import React from 'react';
import styles from './PostForm.module.css';


const PostForm = () => { 
    return (
      <form className={styles.bottom_panel}>
            <input 
            className={styles.form_control} 
            type="text"
            placeholder="write some thing here"/>

            <button type="submit" className={`${styles.add_btn}`}>
                Add
            </button>
      </form>
    )
}

export default PostForm;