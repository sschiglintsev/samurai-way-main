import {v1} from "uuid";
import {postType} from "../components/Profile/MyPost/MyPost";
import {ActionType} from "./reducer-dialogs";

const ADD_POST = "ADD-POST"
const CHANGE_MESSAGE_POST = "CHANGE-MESSAGE-POST"
const SET_PROFILE = "SET-PROFILE"
const SET_IS_LOADING_PROFILE = "SET-IS-LOADING-PROFILE"

type contactsType = {
    facebook: string,
    website: string | null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string | null,
    github: string,
    mainLink: string | null
}

type photosType = {
    small: string,
    large: string
}

export type profileType = {
    aboutMe: string,
    contacts: contactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: photosType
}

type profilePageType = {
    profile: profileType | null,
    messagePost: string,
    posts: Array<postType>,
    isLoading: boolean
}

const initialState = {
    profile: null,
    isLoading: false,
    messagePost: '',
    posts: [
        {id: v1(), message: 'Третий пост', likeCount: 5},
        {id: v1(), message: 'Второй пост', likeCount: 10},
        {id: v1(), message: 'Первый пост', likeCount: 1}
    ]
}

export const reducerPosts = (state: profilePageType = initialState
    , action: ActionType): profilePageType => {
    switch (action.type) {

        case ADD_POST: {
            const stateCopy = {...state, posts: [...state.posts]}
            const newPost = {
                id: v1(),
                message: stateCopy.messagePost,
                likeCount: 23
            }
            stateCopy.posts.unshift(newPost)
            stateCopy.messagePost = '';
            return stateCopy;
        }
        case CHANGE_MESSAGE_POST: {
            const stateCopy = {...state}
            stateCopy.messagePost = action.message;
            return stateCopy
        }

        case "SET-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-IS-LOADING-PROFILE":
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state
    }
}

export type ActionAddPostType = ReturnType<typeof addPostAC>
export type ActionChangeMessagePost = ReturnType<typeof changeMessagePostAC>
export type ActionSetProfile = ReturnType<typeof setProfile>
export type ActionSetIsLoadingProfile = ReturnType<typeof setIsLoadingProfile>

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const changeMessagePostAC = (message: string) => {
    return {
        type: CHANGE_MESSAGE_POST,
        message: message
    } as const
}

export const setProfile = (profile: profileType) => {
    return {
        type: SET_PROFILE,
        profile: profile
    } as const
}

export const setIsLoadingProfile = (isLoading: boolean) => {
    return {
        type: SET_IS_LOADING_PROFILE,
        isLoading
    } as const
}

