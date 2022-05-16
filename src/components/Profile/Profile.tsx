import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {profileType} from "../../Redux/reducer-profile";
import {CircularProgress} from "@material-ui/core";

type profilePropsType = {
    profile: profileType | null,
    isLoading: boolean
}

const Profile = (props: profilePropsType) => {
    return (
        <div>
            {props.isLoading === true
                ? <CircularProgress color="inherit"/>
                : <ProfileInfo profile={props.profile}/>}

            <MyPostContainer/>
        </div>
    );
};

export default Profile;