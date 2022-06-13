import React from 'react';

import Typography from '@mui/material/Typography';
import {AppBar, Box, Button, Toolbar} from "@mui/material";

type PropsType = {
    id: number,
    login: string,
    email: string,
    isAuth: boolean
}

const Header = (props:PropsType) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar style={{background: 'black'}}>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        SOCIAL NETWORK
                    </Typography>
                    <label>{props.login}</label>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>

    );
};

export default Header;