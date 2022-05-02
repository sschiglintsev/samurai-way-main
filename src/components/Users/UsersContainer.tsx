import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, userType} from "../../Redux/reducer-users";
import {rootReducerType} from "../../Redux/redux-store";
import {Users} from "./Users";

type dispatchType = {
    setUsers: (users:Array<userType>) => void,
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
        setUsers: (users:Array<userType>) => {
            dispatch(setUsersAC(users))
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