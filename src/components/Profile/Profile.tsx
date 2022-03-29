import React from 'react';
import classes from "./Profile.module.css";
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {messagesType, profilePageType} from "../../Redux/State";

type ProfileProps = {
    propsProfilePage:profilePageType
    addPost:(message:string)=>void
    changeMessagePost:(message:string) => void
}

const Profile = (props:ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.propsProfilePage.posts}
                    messagePost={props.propsProfilePage.messagePost}
                    addPost={props.addPost}
                    changeMessagePost={props.changeMessagePost}
            />
        </div>
    );
};

export default Profile;