import React from 'react';
import clsses from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: string
    name: string
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={clsses.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};
