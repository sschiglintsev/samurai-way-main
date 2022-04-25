import {v1} from "uuid";
import {postType} from "../components/Profile/MyPost/MyPost";
import {ActionType} from "./reducer-dialogs";

const ADD_POST = "ADD-POST"
const CHANGE_MESSAGE_POST = "CHANGE-MESSAGE-POST"

type profilePageType = {
    messagePost: string,
    posts: Array<postType>
}

const initialState = {
    messagePost: '',
    posts: [
        {id: v1(), message: 'Третий пост', likeCount: 5},
        {id: v1(), message: 'Второй пост', likeCount: 10},
        {id: v1(), message: 'Первый пост', likeCount: 1}
    ]
}

export const reducerProfile = (state: profilePageType = initialState
    , action: ActionType) => {
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
        default:
            return state
    }
}

export type ActionAddPostType = ReturnType<typeof addPostAC>
export type ActionChangeMessagePost = ReturnType<typeof changeMessagePostAC>

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