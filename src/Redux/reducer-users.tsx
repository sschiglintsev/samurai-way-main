import {v1} from "uuid";
import {ActionType} from "./reducer-dialogs";

export type userType = {
    id: string,
    photo: string,
    follow: boolean,
    fullName: string,
    status: string,
    location: {
        country: string,
        city: string
    }
}

export type usersType = {
    users: Array<userType>
}

const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const CHANGE_DIALOGS_MESSAGE_TEXT = 'CHANGE-DIALOGS-MESSAGE-TEXT'
const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'

const initilState = {
    users: [
        {
            id: v1(),
            photo: 'https://pngicon.ru/file/uploads/2_16.png',
            follow: true,
            fullName: 'Andrey',
            status: 'I so beatuful',
            location: {country: 'Turkey', city: 'Stanbul'}
        },
        {
            id: v1(),
            photo: 'https://pngicon.ru/file/uploads/2_16.png',
            follow: true,
            fullName: 'Andrey',
            status: 'I so beatuful',
            location: {country: 'Turkey', city: 'Stanbul'}
        },
        {
            id: v1(),
            photo: 'https://pngicon.ru/file/uploads/2_16.png',
            follow: true,
            fullName: 'Andrey',
            status: 'I so beatuful',
            location: {country: 'Turkey', city: 'Stanbul'}
        },
    ]
}

export const reducerUsers = (state: usersType = initilState, action: ActionType) => {
    switch (action.type) {
        case "SET-USERS": {
            const stateCopy = {...state, users: [...state.users]}
            return stateCopy
        }
        case "FOLLOW": {
            const stateCopy = {...state,users: state.users.map(el=>el.id===action.id? {...el, follow:true}:el)}
            return stateCopy
        }
        case "UNFOLLOW": {
            const stateCopy = {...state, users: state.users.map(el=>el.id===action.id?{...el, follow:false}:el)}
            return stateCopy
        }
        default:
            return state
    }
}

export type ActionSetUsers = ReturnType<typeof setUsersAC>
export type FollowUsers = ReturnType<typeof followAC>
export type UnFollowUsers = ReturnType<typeof unFollowAC>

export const setUsersAC = () => {
    return {
        type: SET_USERS,
    } as const
}
export const followAC = (id: string) => {
    return {
        type: FOLLOW,
        id: id
    } as const
}
export const unFollowAC = (id: string) => {
    return {
        type: UNFOLLOW,
        id: id
    } as const
}
