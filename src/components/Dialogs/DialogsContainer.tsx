import React from 'react';
import {
    addDialogsMessage,
    changeDialogsMessageText, messagesPageType,
} from "../../Redux/reducer-dialogs";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


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
    return {
        propsDialogsMessage: state.messagesPage,
    }
}


export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        addDialogsMessage,
        changeDialogsMessageText
    }),
    withAuthRedirect
)(UsersAPI)

//     withAuthRedirect(connect(mapStateToProps, {
//     addDialogsMessage,
//     changeDialogsMessageText
// })(UsersAPI))
