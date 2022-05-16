import {v1} from "uuid";
import {
    ActionAddPostType,
    ActionChangeMessagePost,
    ActionSetIsLoadingProfile,
    ActionSetProfile
} from "./reducer-profile";
import {
    ActionSetCurrentPage, ActionSetIsLoading,
    ActionSetTotalUsersCount,
    ActionSetUsers,
    FollowUsers,
    UnFollowUsers
} from "./reducer-users";

export  type ActionType =
    ActionAddPostType
    | ActionChangeMessagePost
    | ActionDialogsMessageText
    | ActionAddDialogsMessage
    | ActionSetUsers
    | FollowUsers
    | UnFollowUsers
    | ActionSetTotalUsersCount
    | ActionSetCurrentPage
    | ActionSetIsLoading
    | ActionSetProfile
    | ActionSetIsLoadingProfile

type dialogsType = {
    id: string,
    name: string
}

type messagesType = {
    id: string,
    message: string
}

export type messagesPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
    textMessage: string
}

const CHANGE_DIALOGS_MESSAGE_TEXT = 'CHANGE-DIALOGS-MESSAGE-TEXT'
const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'

const initilState = {
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

export const reducerDialogs = (state: messagesPageType = initilState, action: ActionType) => {
    switch (action.type) {
        case ADD_DIALOGS_MESSAGE: {
            const stateCopy = {...state, messages: [...state.messages]}
            const newMessage = {
                id: v1(),
                message: stateCopy.textMessage,
            }
            stateCopy.messages.unshift(newMessage)
            stateCopy.textMessage = '';
            return stateCopy
        }
        case CHANGE_DIALOGS_MESSAGE_TEXT: {
            const stateCopy = {...state}
            stateCopy.textMessage = action.message;
            return stateCopy
        }
        default:
            return state
    }
}

export type ActionDialogsMessageText = ReturnType<typeof changeDialogsMessageTextAC>
export type ActionAddDialogsMessage = ReturnType<typeof addDialogsMessageAC>

export const changeDialogsMessageTextAC = (message: string) => {
    return {
        type: CHANGE_DIALOGS_MESSAGE_TEXT,
        message: message
    } as const
}
export const addDialogsMessageAC = () => {
    return {
        type: ADD_DIALOGS_MESSAGE
    } as const
}
