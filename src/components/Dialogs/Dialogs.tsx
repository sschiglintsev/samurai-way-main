import React from 'react';
import clsses from './Dialogs.module.css'
import {message} from "antd";
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={clsses.dialogs}>
            <div className={clsses.dialogItems}>
                <Dialog name={'Andrey'} id={1}/>
                <Dialog name={'Vika'} id={2}/>
                <Dialog name={'David'} id={3}/>
            </div>
            <div className={clsses.messages}>
                <Message message={'Hi bro'}/>
                <Message message={'Very nice!'}/>
                <Message message={'what a you doing?'}/>
            </div>
        </div>
    );
};
