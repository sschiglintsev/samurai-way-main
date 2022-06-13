import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {profileType} from "../../Redux/reducer-profile";
import {CircularProgress} from "@mui/material";

type profilePropsType = {
    profile: profileType | null,
    isLoading: boolean
    status:string
    updateProfileStatus:(status:string)=>void
}

const Profile = (props: profilePropsType) => {
    return (
        <div>
            {props.isLoading === true
                ? <CircularProgress color="inherit"/>
                : <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus}/>}

            <MyPostContainer/>
        </div>
    );
};

export default Profile;