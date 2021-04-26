import React from 'react';
import Header from '../Header';
import SearchPanel from '../SearchPanel';
import PostSatusFilter from '../PostStatusFiler';
import PostList from '../PostList';
import PostForm from '../PostForm';
import './App.css';

const App = () => {
    return(
        <div className="app"> 
            <Header/>
            <div className ="search-panel">
                <SearchPanel className="panel"/>
                <PostSatusFilter/>
            </div>

            <div className= "PostList">
                <PostList/>
            </div>

            <div className="PostForm d-flex">
                <PostForm/>
            </div>
        </div>

    )
};

export default App;