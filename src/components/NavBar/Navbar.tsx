import React from 'react';
import classes from "./NavBar.module.css";
import {MenuItem, MenuList, Paper} from "@mui/material";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <Paper>
                <MenuList>
                    <NavLink to={'/profile'}><MenuItem style={{color :'black'}}>Profile</MenuItem></NavLink>
                    <NavLink to={'/dialogs'}><MenuItem style={{color :'black'}}>Messages</MenuItem></NavLink>
                    <NavLink to={'/users'}><MenuItem style={{color :'black'}}>Users</MenuItem></NavLink>
                    <NavLink to={'news'}><MenuItem style={{color :'black'}}>News</MenuItem></NavLink>
                    <NavLink to={'/music'}><MenuItem style={{color :'black'}}>Music</MenuItem></NavLink>
                    <NavLink to={'/settings'}><MenuItem style={{color :'black'}}>Settings</MenuItem></NavLink>
                </MenuList>
            </Paper>
        </div>
    );
};
