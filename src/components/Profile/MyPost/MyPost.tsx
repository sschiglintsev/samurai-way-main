import React from 'react';
import {Post} from "./Post/Post";
import {v1} from "uuid";

export const MyPost = () => {

    const Posts = [
        {id: v1(), message: 'Первый пост', likeCount: 5},
        {id: v1(), message: 'Второй пост', likeCount: 10},
        {id: v1(), message: 'Третий пост', likeCount: 1}
    ]

    const NewPosts = Posts.map(p => <Post id={p.id} message={p.message} likeСount={p.likeCount}/>)

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
            {NewPosts}
        </div>
    );
};
