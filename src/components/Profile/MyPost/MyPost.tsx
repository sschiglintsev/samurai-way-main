import React from 'react';
import {Post} from "./Post/Post";
import {Button, TextField} from "@material-ui/core";

export type postType = {
    id: string,
    message: string,
    likeCount: number
}

type MyPostProps = {
    messagePost: string
    posts: Array<postType>
    changeMessagePost: (message:string) => void
    addPost: () => void
}

export const MyPost = (props: MyPostProps) => {

    const NewPosts = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeСount={p.likeCount}/>)

    let textAreaRef = React.createRef<HTMLTextAreaElement>()

    const onChangeMessagePost = () => {
        if (textAreaRef.current) {
            const message = textAreaRef.current.value
            props.changeMessagePost(message)
        }
    }
    const onAddPost = () => {
        if (textAreaRef.current) {
            props.addPost()
        }
    }
    return (
        <div>
            My post
            <div>
                New post
                <div>
                    <TextField
                        inputRef={textAreaRef}
                        value={props.messagePost}
                        onChange={onChangeMessagePost}
                        id="outlined-basic"
                        label="Enter you massage"
                        variant="outlined"
                        style={{background:'white'}}
                    />
                    <Button variant="contained" onClick={onAddPost} >
                        add post
                    </Button>
                </div>
            </div>
            {NewPosts}
        </div>
    );
};