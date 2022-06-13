import {v1} from "uuid";
import {postType} from "../components/Profile/MyPost/MyPost";
import {ActionType} from "./reducer-dialogs";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const CHANGE_MESSAGE_POST = "CHANGE-MESSAGE-POST"
const SET_PROFILE = "SET-PROFILE"
const SET_IS_LOADING_PROFILE = "SET-IS-LOADING-PROFILE"
const SET_STATUS = "SET-STATUS"

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

export type profilePageType = {
    profile: profileType | null,
    status:string,
    messagePost: string,
    posts: Array<postType>,
    isLoading: boolean
}

const initialState = {
    profile: null,
    status:'',
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

        case "ADD-POST": {
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
        case "CHANGE-MESSAGE-POST": {
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
        case "SET-STATUS": {
            return {...state, status:action.status}
        }
        default:
            return state
    }
}

export type ActionAddPostType = ReturnType<typeof addPostAC>
export type ActionChangeMessagePost = ReturnType<typeof changeMessagePostAC>
export type ActionSetProfile = ReturnType<typeof setProfile>
export type ActionSetIsLoadingProfile = ReturnType<typeof setIsLoadingProfile>
export type ActionSetStatus = ReturnType<typeof setStatus>

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

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export const setIsLoadingProfile = (isLoading: boolean) => {
    return {
        type: SET_IS_LOADING_PROFILE,
        isLoading
    } as const
}

export const setProfilePage = (userID: string) => (dispatch: Dispatch) => {
    console.log("userID", userID)
    dispatch(setIsLoadingProfile(true))
    profileAPI.getProfile(userID === undefined ? '23521' : userID)
        .then(response => {
            dispatch(setIsLoadingProfile(false))
            dispatch(setProfile(response.data))
        })
        .catch(function (error) {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

        })
}

export const setProfileStatus = (userID: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userID === undefined ? '23521' : userID)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateProfileStatus = (status:string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode===0) {
                dispatch(setStatus(status))
            }

        })
}




