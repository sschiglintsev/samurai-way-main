import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/reducer-users";
import {rootReducerType} from "../../Redux/redux-store";

type dispatchType = {
    setUsers: () => void,
    follow:(id:string) => void,
    unFollow:(id:string) => void
}

const matStateToProps = (state: rootReducerType) => {
    return {
        users: state.userPage.users
    }
}

const mapDispatchToProps = (dispatch: any): dispatchType => {
    return {
        setUsers: () => {
            dispatch(setUsersAC())
        },
        follow: (id:string) => {
            dispatch(followAC(id))
        },
        unFollow: (id:string) => {
            dispatch(unFollowAC(id))
        }
    }
}

export const UsersContainer = connect(matStateToProps,mapDispatchToProps)(Users)