import {v1} from "uuid";
import {ActionType} from "./reducer-dialogs";

export type userType = {
    id: string,
    photos: {
        small:string,
        large:string
    },
    followed: boolean,
    name: string,
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
    ]
}

export const reducerUsers = (state: usersType = initilState, action: ActionType) => {
    switch (action.type) {
        case "SET-USERS": {
            const stateCopy = {...state, users: [...state.users, ...action.users]}
            return stateCopy
        }
        case "FOLLOW": {
            const stateCopy = {...state,users: state.users.map(el=>el.id===action.id? {...el, followed:true}:el)}
            return stateCopy
        }
        case "UNFOLLOW": {
            const stateCopy = {...state, users: state.users.map(el=>el.id===action.id?{...el, followed:false}:el)}
            return stateCopy
        }
        default:
            return state
    }
}

export type ActionSetUsers = ReturnType<typeof setUsersAC>
export type FollowUsers = ReturnType<typeof followAC>
export type UnFollowUsers = ReturnType<typeof unFollowAC>

export const setUsersAC = (users:Array<userType>) => {
    return {
        type: SET_USERS,
        users
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
