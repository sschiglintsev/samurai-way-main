import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import classes from './App.module.css'
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route,BrowserRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
        <div className={classes.App_grid }>
            <Header/>
            <div className={classes.navbar}>
                <Navbar/>
            </div>
            <div className={classes.profile}>
                <Route component={Dialogs} path={'/dialogs'}></Route>
                <Route component={Profile} path={'/profile'}></Route>
                <Route component={News} path={'/news'}></Route>
                <Route component={Music} path={'/music'}></Route>
                <Route component={Settings} path={'/settings'}></Route>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
