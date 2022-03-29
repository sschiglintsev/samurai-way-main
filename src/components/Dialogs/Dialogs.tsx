import React from 'react';
import clsses from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {dialogsType, messagesType} from "../../Redux/State";

type DialogsPropsType = {
    propsDialogs:Array<dialogsType>,
    propsMessages:Array<messagesType>
}

export const Dialogs = (props:DialogsPropsType) => {

    const NewDialogs = props.propsDialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    const NewMessages = props.propsMessages.map(m => <Message message={m.message}/>)

    return (
        <div className={clsses.dialogs}>
            <div className={clsses.dialogItems}>
                {NewDialogs}
            </div>
            <div className={clsses.messages}>
                {NewMessages}
            </div>
        </div>
    );
};