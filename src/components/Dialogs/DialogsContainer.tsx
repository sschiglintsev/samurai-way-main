import React from 'react';
import {
    addDialogsMessage,
    changeDialogsMessageText, messagesPageType,
} from "../../Redux/reducer-dialogs";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


type dialogsAPIPropsType = {
    changeDialogsMessageText: (title: string) => void,
    addDialogsMessage: () => void,
    propsDialogsMessage: messagesPageType,
}

export class UsersAPI extends React.Component<dialogsAPIPropsType> {

    constructor(props: dialogsAPIPropsType) {
        super(props)
    }

    render() {

        return (
            <>
                <Dialogs
                         propsDialogsMessage={this.props.propsDialogsMessage}
                         changeDialogsMessageText={this.props.changeDialogsMessageText}
                         addDialogsMessage={this.props.addDialogsMessage}
                />
            </>
        );
    }
}

const mapStateToProps = (state: rootReducerType) => {
    debugger
    return {
        propsDialogsMessage: state.messagesPage,
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, {
    addDialogsMessage,
    changeDialogsMessageText
})(UsersAPI))
