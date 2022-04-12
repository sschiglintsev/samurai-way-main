import React from 'react';
import {Post} from "./Post/Post";
import {ActionType, addPostAC, changeMessagePostAC, postType} from "../../../Redux/State";


type MyPostProps = {
    messagePost: string
    posts: Array<postType>
    dispatch:(action: ActionType)=>void
}

export const MyPost = (props: MyPostProps) => {

    const NewPosts = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeСount={p.likeCount}/>)

    let textAreaRef = React.createRef<HTMLTextAreaElement>()



    const onChangeHandler = () => {
        if (textAreaRef.current){
            const message = textAreaRef.current.value
            props.dispatch(changeMessagePostAC(message))
        }
    }
    const onClickHandler = () => {
        if (textAreaRef.current) {
            props.dispatch(addPostAC())
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
