import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddPostFormDataType = {
    messagePost: string,
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={"messagePost"} component={"textarea"} placeholder={"Enter you massage post"}/>
                <button>Add post</button>
            </form>
        </div>
    );
};


export const AddPostFormReduxForm = reduxForm<AddPostFormDataType>({form: 'AddPostForm'})(AddPostForm);