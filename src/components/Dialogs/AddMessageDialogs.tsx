import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageDialogsFormDataType = {
    message: string,
}

const AddMessageDialogs: React.FC<InjectedFormProps<AddMessageDialogsFormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={"message"} component={"textarea"} placeholder={"Enter you massage"}/>
                <button>Add message</button>
            </form>
        </div>
    );
};


export const AddMessageDialogsReduxForm = reduxForm<AddMessageDialogsFormDataType>({form: 'AddMessageForm'})(AddMessageDialogs);