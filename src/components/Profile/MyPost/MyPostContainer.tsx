import React from 'react';
import {addPostAC, changeMessagePostAC} from "../../../Redux/reducer-profile";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {rootReducerType} from "../../../Redux/redux-store";

type dispatchType = {
    changeMessagePost: (message: string) =>void
    addPost: () =>void
}

const mapStateToProps = (state:rootReducerType) => {
    return {
        posts: state.profilePage.posts,
        messagePost: state.profilePage.messagePost
    }
}
const mapDispatchToProps = (dispatch:any):dispatchType => {
    return {
        changeMessagePost: (message: string) => {
            dispatch(changeMessagePostAC(message))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)