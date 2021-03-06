import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducerPosts} from "./reducer-profile";
import {reducerDialogs} from "./reducer-dialogs";
import {reducerUsers} from "./reducer-users";
import {reducerAuth} from "./reducer-auth";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    profilePage:reducerPosts,
    messagesPage:reducerDialogs,
    userPage:reducerUsers,
    Auth:reducerAuth,
    dialogsPage:reducerDialogs,
    form: formReducer,
})
export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));
export  type reduxStoreType = typeof store