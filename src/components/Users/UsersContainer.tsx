import React, {ChangeEvent} from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unFollow,
    userType, setIsLoadingFollow, getUsers, setOnUnFollow, setOnFollow
} from "../../Redux/reducer-users";
import {rootReducerType} from "../../Redux/redux-store";
import {Users} from "./Users";

type dispatchType = {
    setUsers: (users: Array<userType>) => void,
    follow: (id: string) => void,
    unFollow: (id: string) => void,
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (event: ChangeEvent<unknown>, value: number) => void
    setIsLoading: (value: boolean) => void
    setIsLoadingFollow: (value: boolean) => void
}

type usersAPIPropsType = {
    users: Array<userType>,
    setCurrentPage: (value: number) => void
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isLoading: boolean,
    isLoadingFollow: string[],
    getUsers: (pageSize:number, currentPage: number) => void

    setOnUnFollow:(userID: string)=>void
    setOnFollow:(userID: string)=>void
}

export class UsersAPI extends React.Component<usersAPIPropsType> {
    constructor(props: usersAPIPropsType) {
        super(props)
    }

    componentDidMount(): void {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
       }

    onPageChanged = (page: number) => {
        this.props.getUsers(this.props.pageSize, page)
    }

    onAddUsers() {
        debugger
    }

    render() {

        return (
            <>
                <Users users={this.props.users}
                       currentPage={this.props.currentPage}
                       setCurrentPage={this.onPageChanged}
                       onAddUsers={this.onAddUsers}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       isLoading={this.props.isLoading}
                       isLoadingFollow={this.props.isLoadingFollow}
                       setOnUnFollow={this.props.setOnUnFollow}
                       setOnFollow={this.props.setOnFollow}


                />
            </>
        );
    }
}

const matStateToProps = (state: rootReducerType) => {
    return {
        users: state.userPage.users,
        currentPage: state.userPage.currentPage,
        totalUsersCount: state.userPage.totalUsersCount,
        pageSize: state.userPage.pageSize,
        isLoading: state.userPage.isLoading,
        isLoadingFollow: state.userPage.isLoadingFollow,
    }
}

export const UsersContainer = connect(matStateToProps, {
    setCurrentPage,
    follow,
    unFollow,
    setIsLoadingFollow,
    getUsers,
    setOnUnFollow,
    setOnFollow
})(UsersAPI)