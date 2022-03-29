import React from 'react';
import {Post} from "./Post/Post";
import {postType} from "../../../Redux/State";


type MyPostProps = {
    messagePost: string
    posts: Array<postType>
    addPost: (message: string) => void
    changeMessagePost: (message: string) => void
}

export const MyPost = (props: MyPostProps) => {

    const NewPosts = props.posts.map(p => <Post id={p.id} message={p.message} likeСount={p.likeCount}/>)

    let textAreaRef = React.createRef<HTMLTextAreaElement>()

    const onChangeHandler = () => {
        if (textAreaRef.current){
            props.changeMessagePost(textAreaRef.current.value)
        }
    }
    const onClickHandler = () => {
        if (textAreaRef.current) {
            props.addPost(textAreaRef.current.value)
        }
    }

    return (
        <div>
            My post
            <div>
                New post
                <div>
                    <textarea ref={textAreaRef}
                              value={props.messagePost}
                              onChange={onChangeHandler}/>
                    <button onClick={onClickHandler}>add post</button>
                </div>
            </div>
            {NewPosts}
        </div>
    );
};
