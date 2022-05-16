import {v1} from "uuid";
import {ActionAddPostType, ActionChangeMessagePost, reducerPosts} from "./reducer-profile";
import {ActionAddDialogsMessage, ActionDialogsMessageText, reducerDialogs} from "./reducer-dialogs";

type postType = {
    id: string,
    message: string,
    likeCount: number
}

type dialogsType = {
    id: string,
    name: string
}

type messagesType = {
    id: string,
    message: string
}

type profilePageType = {
    messagePost: string,
    posts: Array<postType>
}

type messagesPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
    textMessage: string
}

export type stateTypeRoot = {
    profilePage: profilePageType,
    messagesPage: messagesPageType
}

type storePropsType = {
    _state: stateTypeRoot
    getState: () => stateTypeRoot
    onChange: () => void
    subscribe: (callBack: () => void) => void
    dispatch: (action: ActionType) => void
}
let store: storePropsType = {
    _state: {
        profilePage: {
            messagePost: '',
            posts: [
                {id: v1(), message: 'Третий пост', likeCount: 5},
                {id: v1(), message: 'Второй пост', likeCount: 10},
                {id: v1(), message: 'Первый пост', likeCount: 1}
            ]
        },
        messagesPage: {
            dialogs: [
                {id: v1(), name: 'Andrey'},
                {id: v1(), name: 'Vika'},
                {id: v1(), name: 'David'}
            ],
            messages: [
                {id: v1(), message: 'Hi mam'},
                {id: v1(), message: 'Hi bro'},
                {id: v1(), message: 'Hi dady'}
            ],
            textMessage: ''
        }
    },
    getState() {
        return this._state
    },
    onChange() {

    },
    subscribe(callBack) {
        this.onChange = callBack
    },
    dispatch(action) {

        //this._state.profilePage = reducerPosts(this._state.profilePage, action)
        this._state.messagesPage = reducerDialogs(this._state.messagesPage,action)
        this.onChange()

    }
}

  type ActionType =
    ActionAddPostType
    | ActionChangeMessagePost
    | ActionDialogsMessageText
    | ActionAddDialogsMessage

