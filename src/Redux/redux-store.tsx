import {combineReducers, createStore} from "redux";
import {reducerPosts} from "./reducer-profile";
import {reducerDialogs} from "./reducer-dialogs";
import {reducerUsers} from "./reducer-users";

const rootReducer = combineReducers({
    profilePage:reducerPosts,
    messagesPage:reducerDialogs,
    userPage:reducerUsers
})
export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
export  type reduxStoreType = typeof store