import React from 'react';
import {Post} from "./Post/Post";

export const MyPost = () => {
    return (
        <div>
            My post
            <div>
                New post
                <div>
                    <input/>
                    <button>add post</button>
                </div>
            </div>
            <Post message={'Первый пост'} likeСount={5}/>
            <Post message={'Второй пост'} likeСount={10}/>
        </div>
    );
};
