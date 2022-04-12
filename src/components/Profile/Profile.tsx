import React from 'react';
import classes from "./Profile.module.css";
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, messagesType, profilePageType} from "../../Redux/State";

type ProfileProps = {
    propsProfilePage:profilePageType
    dispatch: (action: ActionType)=>void

}

const Profile = (props:ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.propsProfilePage.posts}
                    messagePost={props.propsProfilePage.messagePost}
                    dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;