import React from 'react';
import {Post} from "./Post/Post";
import {AddPostFormDataType, AddPostFormReduxForm} from "./AddPostForm";

export type postType = {
    id: string,
    message: string,
    likeCount: number
}

type MyPostProps = {
    posts: Array<postType>
    addPost: (massagePost:string) => void
}

export const MyPost = (props: MyPostProps) => {

    const NewPosts = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeСount={p.likeCount}/>)

    const onAddPost = (formData: AddPostFormDataType) => {
        props.addPost(formData.messagePost)
    }
    return (
        <div>
            My post
            <div>
                New post
                <AddPostFormReduxForm onSubmit={onAddPost}/>
            </div>
            {NewPosts}
        </div>
    );
};