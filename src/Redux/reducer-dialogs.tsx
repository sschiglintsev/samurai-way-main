import {v1} from "uuid";
import {
    ActionAddPostType,
    ActionSetIsLoadingProfile,
    ActionSetProfile, ActionSetStatus
} from "./reducer-profile";
import {
    ActionSetCurrentPage, ActionSetIsLoading, ActionSetIsLoadingFollow,
    ActionSetTotalUsersCount,
    ActionSetUsers,
    FollowUsers,
    UnFollowUsers
} from "./reducer-users";
import {setAuthMeType} from "./reducer-auth";

export  type ActionType =
    ActionAddPostType
    | ActionAddDialogsMessage
    | ActionSetUsers
    | FollowUsers
    | UnFollowUsers
    | ActionSetTotalUsersCount
    | ActionSetCurrentPage
    | ActionSetIsLoading
    | ActionSetProfile
    | ActionSetIsLoadingProfile
    | setAuthMeType
    | ActionSetIsLoadingFollow
    | ActionSetStatus

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
}

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
}

export const reducerDialogs = (state: messagesPageType = initilState, action: ActionType) => {
    switch (action.type) {
        case ADD_DIALOGS_MESSAGE: {
            const stateCopy = {...state, messages: [...state.messages]}
            const newMessage = {
                id: v1(),
                message: action.message,
            }
            stateCopy.messages.unshift(newMessage)
            return stateCopy
        }
        default:
            return state
    }
}

export type ActionAddDialogsMessage = ReturnType<typeof addDialogsMessage>


export const addDialogsMessage = (message: string) => {
    return {
        type: ADD_DIALOGS_MESSAGE,
        message
    } as const
}
