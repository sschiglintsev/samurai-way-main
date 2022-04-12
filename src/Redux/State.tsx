import {v1} from "uuid";

export type postType = {
    id: string,
    message: string,
    likeCount: number
}

export type dialogsType = {
    id: string,
    name: string
}

export type messagesType = {
    id: string,
    message: string
}

export type profilePageType = {
    messagePost: string,
    posts: Array<postType>
}

export type messagesPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
}

export type stateTypeRoot = {
    profilePage: profilePageType,
    messagesPage: messagesPageType
}

export type storePropsType = {
    _state: stateTypeRoot
    addPost: () => void
    changeMessagePost: (message: string) => void
    getState: () => stateTypeRoot
    onChange:()=>void
    subscribe: (callBack:()=>void) =>void
    dispatch: (action: ActionType)=>void
}

export let store: storePropsType = {
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
            ]
        }
    },
    getState() {
        return this._state
    },
    addPost() {
        const newPost = {
            id: v1(),
            message: this.getState().profilePage.messagePost,
            likeCount: 23
        }
        this.getState().profilePage.posts.unshift(newPost)
        this.getState().profilePage.messagePost = '';
        this.onChange()
    },
    changeMessagePost(message: string) {
        this.getState().profilePage.messagePost = message;
        this.onChange()
    },
    onChange () {

    },
    subscribe (callBack) {
        this.onChange = callBack
    },
    dispatch (action) {
        if (action.type==='ADD-POST') {
            const newPost = {
                id: v1(),
                message: this.getState().profilePage.messagePost,
                likeCount: 23
            }
            this.getState().profilePage.posts.unshift(newPost)
            this.getState().profilePage.messagePost = '';
            this.onChange()
        } else if (action.type==='CHANGE-MESSAGE-POST') {
            this.getState().profilePage.messagePost = action.message;
            this.onChange()
        }
    }
}

export  type ActionType = ActionAddPostType | ActionChangeMessagePost

type ActionAddPostType = ReturnType<typeof addPostAC>

type ActionChangeMessagePost = ReturnType<typeof changeMessagePostAC>

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const changeMessagePostAC = (message:string) => {
    return {
        type: "CHANGE-MESSAGE-POST",
        message: message
    } as const
}




