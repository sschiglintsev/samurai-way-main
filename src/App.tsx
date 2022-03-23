import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import classes from './App.module.css'
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

export type ArrayDialogs = {
    id: string,
    name: string
}

export type ArrayMessages = {
    id: string,
    message: string
}

export  type ArrayPosts = {
    id: string,
    message: string,
    likeCount: number
}

export type MessageType = {
    messages: Array<ArrayMessages>,
    dialogs: Array<ArrayDialogs>,

}
export type PostsType = {
    posts: Array<ArrayPosts>,

}
export type StatePageType = {
    profilePage: PostsType
    messagesPage: MessageType
}

export  type AppPropsType = {
    state: StatePageType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={classes.App_grid}>
                <Header/>
                <div className={classes.navbar}>
                    <Navbar/>
                </div>
                <div className={classes.profile}>
                    <Route render={() => <Dialogs propsDialogs={props.state.messagesPage.dialogs}
                              propsMessages={props.state.messagesPage.messages}/>}
                    path={'/dialogs'}/>
                    <Route render={() => <Profile propsPosts={props.state.profilePage.posts}/>}
                    path={'/profile'}/>
                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
