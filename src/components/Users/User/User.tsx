import React from 'react';
import {userType} from "../../../Redux/reducer-users";
import {Button, ButtonBase, Grid, Paper, styled, Typography} from "@material-ui/core";

type userPropsType = {
    follow: (id: string) => void,
    unFollow: (id: string) => void
    user: userType
}

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '100px'
});

export const User = (props: userPropsType) => {

    const onFollow = () => {
        props.follow(props.user.id)
    }
    const onUnFollow = () => {
        props.unFollow(props.user.id)
    }

    return (
        <Paper >
            <Grid container spacing={5} style={{margin:'10px', width: '100%'}}>
                <Grid item>
                    <ButtonBase>
                        <Img alt="avatar" src={props.user.photo}/>
                    </ButtonBase>

                    <Grid item >
                        <Button variant="contained" onClick={props.user.follow?onUnFollow:onFollow} style={{width: '100px'}}>
                            {props.user.follow ?
                                'UNFOLLOW'
                                : 'FOLLOW'}
                        </Button>
                    </Grid>

                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {props.user.fullName}
                            </Typography>
                            <Typography variant="body2">
                                {props.user.status}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            {props.user.location.country}
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            {props.user.location.city}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};
