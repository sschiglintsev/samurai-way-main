import React, {useEffect} from 'react';
import Profile from "./Profile";
import {rootReducerType} from "../../Redux/redux-store";
import {
    profileType,
    setProfilePage, setProfileStatus, updateProfileStatus,
} from "../../Redux/reducer-profile";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type dispatchType = {
    setProfile: (profile: profileType | null) => void,
    setIsLoadingProfile: (isLoading: boolean) => void,
    updateProfileStatus: (status: string) => void
    setProfilePage: (userID: string) => void
    setProfileStatus: (userID: string) => void
}

type mapStateToPropsType = {
    profile: profileType | null,
    isLoading: boolean
    status: string
}
type PathParamType = {
    idUser: "idUser";
}

type OwnPropsType = mapStateToPropsType & dispatchType
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

export const ProfileWithRouter = (props: PropsType) => {
    console.log("ProfileWithRouter", props.isLoading)
    const params = useParams<PathParamType>();
       useEffect(() => {
            props.setProfilePage(params.idUser)
            props.setProfileStatus(params.idUser)
        },
           [])

    return (
        <Profile profile={props.profile} isLoading={props.isLoading} status={props.status}
                 updateProfileStatus={props.updateProfileStatus}/>
    );
};

const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isLoading: state.profilePage.isLoading,
        status: state.profilePage.status
    }
}


export const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {setProfilePage, setProfileStatus, updateProfileStatus}),
)
(ProfileWithRouter)
