import React from 'react';
import classes from './ProfileInfo.module.css'
import {profileType} from "../../../Redux/reducer-profile";
import ProfileStatus from "../Status/ProfileStatus";

type profileInfoPropsType = {
    profile:profileType | null
    status:string
    updateProfileStatus:(status:string)=>void
}

export const ProfileInfo = (props:profileInfoPropsType) => {
    return (
        <div>
            <div>
                {props.profile
                    ? <div>
                        <img src={props.profile.photos.small}/>
                    </div>
                    : ''}

            </div>
            <div className={classes.avatar}>
                {props.profile
                    ? <div>
                        {props.profile.fullName}
                        {props.profile.aboutMe}
                        {props.profile.contacts.github}
                        {props.profile.lookingForAJob}
                        {props.profile.lookingForAJobDescription}
                        {props.profile.fullName}
                        {props.profile.userId}
                    </div>
                    : ''}
            </div>
            <ProfileStatus userID={props.profile && props.profile.userId} updateProfileStatus={props.updateProfileStatus}/>
        </div>
    );
};
