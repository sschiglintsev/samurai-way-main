import React from 'react'
import classes from './App.module.css'
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Navbar} from "./components/NavBar/Navbar";
import {UsersContainer} from "./components/Users/UsersContainer";
import { ProfileContainer } from './components/Profile/ProfileContainer';
import {LoginPage} from "./components/Login/LoginPage";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import { Route } from 'react-router-dom';


function App() {
    return (
            <div className={classes.App_grid}>
                <div className={classes.header}>
                <HeaderContainer  />
                </div>
                <div className={classes.navbar}>
                    <Navbar/>
                </div>
                <div className={classes.profile}>

                    <Route path={'/dialogs'}><DialogsContainer  /></Route>
                    <Route path={'/profile/:idUser'}><ProfileContainer/></Route>
                    <Route exact={true} path={'/profile'}><ProfileContainer/></Route>
                    <Route path={'/users'}><UsersContainer /></Route>
                    <Route path={'/news'}><News/></Route>
                    <Route path={'/music'}><Music/></Route>
                    <Route path={'/settings'}><Settings/></Route>
                    <Route path={'/login'}><LoginPage/></Route>

                </div>
            </div>
    );
}

export default App;
