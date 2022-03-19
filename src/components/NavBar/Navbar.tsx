import React from 'react';
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <nav>
                <div>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to={'/dialogs'}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to={'news'}>News</NavLink>
                </div>
                <div>
                    <NavLink to={'/music'}>Music</NavLink>
                </div>
                <div>
                    <NavLink to={'/settings'}>Settings</NavLink>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;