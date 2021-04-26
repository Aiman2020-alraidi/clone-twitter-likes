import React from 'react';
import PostListItem from '../PostListItem';
import styles from './PostList.module.css';

const PostList = () => {
    return (
        <ul className={styles.list_group}>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    )
}

export default PostList;