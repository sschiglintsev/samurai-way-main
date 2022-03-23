import React from 'react';
import clsses from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {v1} from "uuid";


export const Dialogs = () => {

    let Dialogs = [
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Vika'},
        {id: v1(), name: 'David'}
    ]

    let Messages = [
        {id: v1(), message: 'Hi bro'},
        {id: v1(), message: 'Hi bro'},
        {id: v1(), message: 'Hi bro'}
    ]

    const NewDialogs = Dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    const NewMessages = Messages.map(m => <Message message={m.message}/>)

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