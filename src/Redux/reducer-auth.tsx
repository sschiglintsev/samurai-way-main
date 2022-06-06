import {ActionType} from "./reducer-dialogs";
import {Dispatch} from "redux";
import {headerAPI} from "../api/api";

const SET_AUTH_ME = "SET-AUTH-ME"

export type initialAuthStateType = {
    id: number,
    login: string,
    email: string,
    isAuth: boolean
}

const initialState: initialAuthStateType = {
    id: NaN,
    login: '',
    email: '',
    isAuth: false
}

export const reducerAuth = (state: initialAuthStateType = initialState, action: ActionType): initialAuthStateType => {
    switch (action.type) {
        case "SET-AUTH-ME": {
            const id = action.payload.id
            const login = action.payload.login
            const email = action.payload.email
            return {...state, id: id, login: login, email: email, isAuth: true}
        }
        default:
            return state
    }
}


export type setAuthMeType = ReturnType<typeof setAuthMe>


export const setAuthMe = (id: number, login: string, email: string) => {
    return {
        type: SET_AUTH_ME,
        payload: {
            id,
            login,
            email
        }
    } as const
}

export const setAuthMeTC = () => (dispatch: Dispatch) => {
    headerAPI.getAuthMe()
        .then(response => {
            if (response.resultCode === 0) {
                const {id, login, email} = response.data
                dispatch(setAuthMe(id, login, email))
            }


        })
        .catch(rej => {
            console.log("error no Internet")
        })
}


