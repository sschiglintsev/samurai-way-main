import React, {ChangeEvent} from 'react';
import clsses from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {Button, TextField} from "@material-ui/core";
import {messagesPageType} from "../../Redux/reducer-dialogs";

type DialogsPropsType = {
    changeMessage:(title:string) => void,
    addMessage:() => void,
    propsDialogsMessage: messagesPageType,
}

export const Dialogs = (props: DialogsPropsType) => {

    const NewDialogs = props.propsDialogsMessage.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
    const NewMessages = props.propsDialogsMessage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeMessage(e.target.value)
    }
    const onClickAddMessageHandler = () => {
        props.addMessage()
    }

    return (
        <div className={clsses.dialogs}>
            <div className={clsses.dialogItems}>
                {NewDialogs}
            </div>
            <div className={clsses.messages}>
                {NewMessages}
                <div>

                    <TextField
                        value={props.propsDialogsMessage.textMessage}
                        onChange={onChangeMessageHandler}
                        id="outlined-basic"
                        label="Enter you massage"
                        variant="outlined"
                        style={{background:'white'}}

                    />

                    <p></p>
                    <Button variant="contained" onClick={onClickAddMessageHandler} >
                        Add message
                    </Button>
                </div>
            </div>
        </div>
    );
};