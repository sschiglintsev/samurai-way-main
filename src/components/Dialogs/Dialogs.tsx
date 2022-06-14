import React, {ChangeEvent} from 'react';
import clsses from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {messagesPageType} from "../../Redux/reducer-dialogs";
import {AddMessageDialogsFormDataType, AddMessageDialogsReduxForm} from "./AddMessageDialogs";

type DialogsPropsType = {
    addDialogsMessage:(message:string) => void,
    propsDialogsMessage: messagesPageType,
}

export const Dialogs = (props: DialogsPropsType) => {



    const NewDialogs = props.propsDialogsMessage.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
    const NewMessages = props.propsDialogsMessage.messages.map(m => <Message key={m.id} message={m.message}/>)


    const AddMessageHandler = (formData: AddMessageDialogsFormDataType) => {
        props.addDialogsMessage(formData.message)
    }

    return (
        <div className={clsses.dialogs}>
            <div className={clsses.dialogItems}>
                {NewDialogs}
            </div>
            <div className={clsses.messages}>
                {NewMessages}
                <AddMessageDialogsReduxForm onSubmit={AddMessageHandler}/>
            </div>
        </div>
    );
};