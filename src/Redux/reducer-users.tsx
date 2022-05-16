import {v1} from "uuid";
import {ActionType} from "./reducer-dialogs";
import {ChangeEvent} from "react";

export type userType = {
    id: string,
    photos: {
        small: string,
        large: string
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
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    isLoading: boolean
}

const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_IS_LOADING = 'SET-IS-LOADING'

const CHANGE_DIALOGS_MESSAGE_TEXT = 'CHANGE-DIALOGS-MESSAGE-TEXT'
const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'

const initilState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 5,
    isLoading: false
}

export const reducerUsers = (state: usersType = initilState, action: ActionType) => {
    switch (action.type) {
        case "SET-USERS": {
            const stateCopy = {...state, users: [...action.users]}
            return stateCopy
        }
        case "FOLLOW": {
            const stateCopy = {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)
            }
            return stateCopy
        }
        case "UNFOLLOW": {
            const stateCopy = {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)
            }
            return stateCopy
        }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET-IS-LOADING":
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state
    }
}

export type ActionSetUsers = ReturnType<typeof setUsers>
export type FollowUsers = ReturnType<typeof follow>
export type UnFollowUsers = ReturnType<typeof unFollow>
export type ActionSetTotalUsersCount = ReturnType<typeof setTotalUsersCount>
export type ActionSetCurrentPage = ReturnType<typeof setCurrentPage>
export type ActionSetIsLoading = ReturnType<typeof setIsLoading>


export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}
export const setUsers = (users: Array<userType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const follow = (id: string) => {
    return {
        type: FOLLOW,
        id: id
    } as const
}
export const unFollow = (id: string) => {
    return {
        type: UNFOLLOW,
        id: id
    } as const
}
export const setIsLoading = (isLoading: boolean) => {
    return {
        type: SET_IS_LOADING,
        isLoading
    } as const
}

