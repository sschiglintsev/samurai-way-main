import React from 'react';
import Header from "./components/Header/Header";
import classes from './App.module.css'
import {Route, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Navbar} from "./components/NavBar/Navbar";
import {UsersContainer} from "./components/Users/UsersContainer";
import Profile from "./components/Profile/Profile";


function App() {
    return (
            <div className={classes.App_grid}>
                <div className={classes.header}>
                <Header/>
                </div>
                <div className={classes.navbar}>
                    <Navbar/>
                </div>
                <div className={classes.profile}>
                    <Switch>
                    <Route path={'/dialogs'}><DialogsContainer /></Route>
                    <Route path={'/profile'}><Profile/></Route>
                    <Route path={'/users'}><UsersContainer /></Route>
                    <Route path={'/news'}><News/></Route>
                    <Route path={'/music'}><Music/></Route>
                    <Route path={'/settings'}><Settings/></Route>
                    </Switch>
                </div>
            </div>
    );
}

export default App;
