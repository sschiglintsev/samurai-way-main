import {v1} from "uuid";
import {ActionType} from "./reducer-dialogs";
import {ChangeEvent} from "react";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

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
    isLoading: boolean,
    isLoadingFollow: string[],
}

const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_IS_LOADING = 'SET-IS-LOADING'
const SET_IS_LOADING_FOLLOW = 'SET-IS-LOADING-FOLLOW'

const CHANGE_DIALOGS_MESSAGE_TEXT = 'CHANGE-DIALOGS-MESSAGE-TEXT'
const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'

const initilState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 5,
    isLoading: false,
    isLoadingFollow: []
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
        case "SET-IS-LOADING-FOLLOW": {
            return action.isLoading
                ? {...state, isLoadingFollow: [...state.isLoadingFollow, action.id]}
                : {...state, isLoadingFollow: [...state.isLoadingFollow.filter(el => el !== action.id)]}
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
export type ActionSetIsLoadingFollow = ReturnType<typeof setIsLoadingFollow>


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

export const setIsLoadingFollow = (id: string, isLoading: boolean) => {
    return {
        type: SET_IS_LOADING_FOLLOW,
        id,
        isLoading
    } as const
}

export const getUsers = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    usersAPI.getUsers(pageSize, currentPage)
        .then(response => {
            dispatch(setIsLoading(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
        })
        .catch(rej => {
            console.log("error no Internet")
        })
}

export const setOnUnFollow = (userID: string) =>(dispatch:Dispatch) => {
    dispatch(setIsLoadingFollow(userID, true))
    usersAPI.unFollowUser(userID)
        .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unFollow(userID))
                    dispatch(setIsLoadingFollow(userID, false))
                }
            }
        )
}
export const setOnFollow = (userID: string) =>(dispatch:Dispatch) => {
    dispatch(setIsLoadingFollow(userID, true))
    usersAPI.followUser(userID)
        .then(response => {
                if (response.resultCode === 0) {
                    dispatch(follow(userID))
                    dispatch(setIsLoadingFollow(userID, false))
                }
            }
        )
}

