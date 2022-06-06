import React, {JSXElementConstructor, useEffect} from 'react';
import axios from "axios";
import Profile from "./Profile";
import {rootReducerType} from "../../Redux/redux-store";
import {
    profileType,
    setIsLoadingProfile,
    setProfile, setProfilePage,
} from "../../Redux/reducer-profile";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

type dispatchType = {
    setProfile: (profile: profileType | null) => void,
    setIsLoadingProfile: (isLoading: boolean) => void,
}

type mapStateToPropsType = {
    profile: profileType | null,
    isLoading: boolean
}
type PathParamType = {
    userId:string
}
type OwnPropsType = mapStateToPropsType & dispatchType
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

export const ProfileWithRouter = (props:PropsType) => {
    const params = useParams<'idUser'>();
    useEffect( () => {
            props.setProfilePage(params.idUser)
        }
    , [])

    return (
        <Profile profile={props.profile} isLoading={props.isLoading}/>
    );
};

const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isLoading: state.profilePage.isLoading
    }
}

export const ProfileContainer = connect(mapStateToProps, {setProfile, setIsLoadingProfile,setProfilePage})(ProfileWithRouter)
