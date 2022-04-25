import React from 'react';
import {addDialogsMessageAC, changeDialogsMessageTextAC} from "../../Redux/reducer-dialogs";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../Redux/redux-store";

type dispatchType = {
    addMessage: () => void
    changeMessage: (message:string) => void
}

const mapStateToProps = (state: rootReducerType) => {
    return {
        propsDialogsMessage: state.messagesPage
    }
}

const mapDispatchToProps =(dispatch:any):dispatchType => {
    return{
        addMessage: ()=>{
            dispatch(addDialogsMessageAC())
        },
        changeMessage: (message:string) => {
            dispatch(changeDialogsMessageTextAC(message))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
