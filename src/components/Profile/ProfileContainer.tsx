import React, {JSXElementConstructor, useEffect} from 'react';
import axios from "axios";
import Profile from "./Profile";
import {rootReducerType} from "../../Redux/redux-store";
import {
    profileType,
    setIsLoadingProfile,
    setProfile,
} from "../../Redux/reducer-profile";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import {useParams} from "react-router-dom";

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
        props.setIsLoadingProfile(true)
        let userID = params.idUser
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userID)
            .then(response => {
                props.setIsLoadingProfile(false)
                props.setProfile(response.data)
            })
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }

            })
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

export const ProfileContainer = connect(mapStateToProps, {setProfile, setIsLoadingProfile})(ProfileWithRouter)
