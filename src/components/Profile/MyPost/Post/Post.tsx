import React from 'react';
import classes from "./Post.module.css";

type PostPropsType = {
    likeСount:number
    message:string
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={classes.post}>
            <img src={'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'} />
            {props.message}
            <div>
                <span>Like {props.likeСount}</span>
            </div>
        </div>
    );
};
