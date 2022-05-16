import React, {ChangeEvent} from 'react';
import {connect} from "react-redux";
import {
    follow, setIsLoading,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    userType
} from "../../Redux/reducer-users";
import {rootReducerType} from "../../Redux/redux-store";
import {Users} from "./Users";
import axios from "axios";

type dispatchType = {
    setUsers: (users: Array<userType>) => void,
    follow: (id: string) => void,
    unFollow: (id: string) => void,
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (event: ChangeEvent<unknown>, value: number) => void
    setIsLoading: (value: boolean) => void
}

type usersAPIPropsType = {
    users: Array<userType>,
    setUsers: (users: Array<userType>) => void,
    follow: (id: string) => void,
    unFollow: (id: string) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (value: number) => void
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isLoading: boolean,
    setIsLoading:(isLoading:boolean) => void
}

export class UsersAPI extends React.Component<usersAPIPropsType> {
    constructor(props: usersAPIPropsType) {
        super(props)
    }

    componentDidMount(): void {
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
            .catch(rej =>{
                console.log("error no Internet")
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    //
    onAddUsers() {
        debugger
    }


    render() {


        return (
            <>
                <Users users={this.props.users}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       setCurrentPage={this.onPageChanged}
                       onAddUsers={this.onAddUsers}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       unFollow={this.props.unFollow}
                       isLoading={this.props.isLoading}
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
        isLoading: state.userPage.isLoading
    }
}

// const mapDispatchToProps = (dispatch: any): dispatchType => {
//     return {
//         setCurrentPage(event: ChangeEvent<unknown>, value: number) {
//             dispatch(setCurrentPageAC(value))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setUsers: (users: Array<userType>) => {
//             dispatch(setUsersAC(users))
//         },
//         follow: (id: string) => {
//             dispatch(followAC(id))
//         },
//         unFollow: (id: string) => {
//             dispatch(unFollowAC(id))
//         },
//         setIsLoading: (isLoading: boolean) => {
//             dispatch(setIsLoadingAC(isLoading))
//         }
//     }
// }

export const UsersContainer = connect(matStateToProps, {
        setCurrentPage,
        setTotalUsersCount,
        setUsers,
        follow,
        unFollow,
        setIsLoading
    })(UsersAPI)