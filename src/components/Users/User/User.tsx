import React from 'react';
import {userType} from "../../../Redux/reducer-users";
import {Button, ButtonBase, Grid, MenuItem, Paper, styled, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

type userPropsType = {
    user: userType
    isLoadingFollow: string[],
    setOnUnFollow:(userID: string)=>void,
    setOnFollow:(userID: string)=>void
}

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '100px'
});

export const User = (props: userPropsType) => {
    const onFollow = () => {
        props.setOnFollow(props.user.id)


    }
    const onUnFollow = () => {
        props.setOnUnFollow(props.user.id)
      }


    return (
        <Paper>
            <Grid container spacing={5} style={{margin: '10px', width: '100%'}}>
                <Grid item>
                    <NavLink to={`/profile/${props.user.id}`}>
                        <ButtonBase>
                            <Img alt="avatar"
                                 src={props.user.photos.small === null ? 'https://pngicon.ru/file/uploads/2_16.png' : props.user.photos.small}/>
                        </ButtonBase>
                    </NavLink>
                    <Grid item>
                        <Button disabled={props.isLoadingFollow.some(el=>el===props.user.id)}
                                variant="contained"
                                onClick={props.user.followed ? onUnFollow : onFollow}
                                style={{width: '100px'}}>
                            {props.user.followed ?
                                'UNFOLLOW'
                                : 'FOLLOW'}
                        </Button>
                    </Grid>

                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <NavLink to={`/profile/${props.user.id}`}>
                                <Typography gutterBottom variant="subtitle1" component="div" style={{color: 'black'}}>
                                    {props.user.name}
                                </Typography>
                            </NavLink>
                            <Typography variant="body2">
                                {props.user.status}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            Country
                            {/*{props.user.location.country}*/}
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            City
                            {/*{props.user.location.city}*/}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};
