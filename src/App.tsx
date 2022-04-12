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
import {ActionType, stateTypeRoot} from "./Redux/State";

export  type AppPropsType = {
    state: stateTypeRoot
    dispatch: (action: ActionType)=>void
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
                    <Route render={() => <Profile propsProfilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}/>}
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
