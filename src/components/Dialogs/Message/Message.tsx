import React from 'react';
import clsses from "../Dialogs.module.css";
type MessagePropsType = {
    message:string
}

export  const Message = (props:MessagePropsType) => {
    return (
        <div className={clsses.message}>{props.message}</div>
    );
};
